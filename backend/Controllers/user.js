const User = require('../Modals/user');
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');


const cookieOptions = {
    httpOnly: true,
    secure: false, // Set to true in production
    sameSite: 'Lax'
  
};


// signup
exports.signUp=async(req,res)=>{
    try{
        const { channelName, userName, about, profilePic, password } = req.body;
        const isExist = await User.findOne({ userName });
        if(isExist){
            res.status(400).json({
                error:"user name already exits please try with other username"
            })
        }else{
            let updatedpass=await bcrypt.hash(password,10);
            const user=new User({channelName,userName, about, profilePic, password:updatedpass});
            await user.save();
            res.status(201).json({
                message:"user registered successfully",
                success:"true"
            })
        }
        
    } catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}


// signIn
exports.signIn = async (req,res)=>{
    try{
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        if(user && await bcrypt.compare(password,user.password)){
            const token=jwt.sign({userId:user._id},"AJIT");
            res.cookie('token',token ,cookieOptions);
            res.json({
                message:"login in successfully",
                success:"true",
                token,
                user
            });


        }else{
            res.status(400).json({
                error:" username and password incorrect"

            })

        }
    } catch (errorMsg){
        res.status(500).json({ error: 'Server error' });
    }
}

// logout code
exports.logout = async(req,res)=>{
    res.clearCookie('token', cookieOptions).json({ message: 'Logged out successfully' });
}


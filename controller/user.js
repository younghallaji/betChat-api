import registerUser from '../model/registerModel.js';
// import './model/registerModel.js';

export const allUsers = async(req, res) => {
    try {
        const registeredUsers = await registerUser.find();
        res.status(200).json(registeredUsers);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const register = async(req, res) => {
    const user = req.body;
    console.log(user);
    res.status(200).json({message:'successful'})
    const newUser = new registerUser(user);
    try {
        await newUser.save()
    } catch (error) {
        res.status(409).json({message:error.message})
    }
    // if(!user)
    // res.send('New Registration made')
}
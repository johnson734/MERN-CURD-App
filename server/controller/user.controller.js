import UserModel from "../model/user.model.js";
 
export const create = async (req, res) => {
    try {
        const {name,email,address} = req.body;
        const userExists = await UserModel.findOne({ email });

        if (userExists) {
            return res.status(400).json({message:"User Already Exists."})
        }
        const newUser = new UserModel({ name, email, address })
        
        const savedData = await newUser.save();

        res.status(200).json(savedData);

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getUsers =async (req, res) => {
    try {
        const AllUsers = await UserModel.find();
        if (!AllUsers || AllUsers.length === 0) {
          return  res.status(404).json({message:"User Data Not Found..."})
        } 
        res.status(200).json(AllUsers);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getUser = async (req, res) => {
    try {
        const id = req.params.id; 
        const userExists = await UserModel.findById({_id:id});
        if (!userExists) {
          return res.status(404).json({ message: "User Data Not Found..." }); 
        }
        res.status(200).json(userExists);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message }); 
    }
}

export const update = async(req, res) => {
    try {
        const id = req.params.id;
        const userExists = await UserModel.findById({ _id: id });
        if (!userExists) {
          return res.status(404).json({ message: "User Data Not Found..." });
        }

        const updateddata = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updateddata);
        

    } catch (error) {
        
    }
}

export const deletUser = async (req, res) => {
    try {
         const id = req.params.id;
         const userExists = await UserModel.findById({ _id: id });
         if (!userExists) {
           return res.status(404).json({ message: "User Data Not Found..." });
         }
           const deletedData = await UserModel.findByIdAndDelete(id);
           res.status(200).json("User deleted successfully..");
        
    } catch (error) {
         res.status(500).json({ success: false, message: error.message });  
    }
}
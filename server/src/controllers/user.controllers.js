import User from "../models/User";
import Role from "../models/TypeUser";
import assist from "../models/Assistant";

export const createUser = async (req, res) => {
  try {
    const { username, email, password, roles,assistant } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });
    const assistantFound = await assist.find({ _id: { $in: assistant } });


    const user = new User({
      username,
      email,
      password,
      roles: rolesFound.map((role) => role._id),
      assistant: assistantFound.map((assistant) => assistant._id),

    });

    user.password = await User.encryptPassword(user.password);

    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      roles: savedUser.roles,
      assistant: savedUser.assistant,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async (req, res) => {
  const Users = await User.find();
  return res.json(Users);
};

export const getUser = async (req, res) => {};
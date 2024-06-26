import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  const { name, username, email, rol, picture, password } = req.body;

  try {
    const userEmailFound = await User.findOne({ email });
    if (userEmailFound) return res.status(400).json(["Email already exists"]);

    const userNameFound = await User.findOne({ username });
    if (userNameFound) return res.status(400).json(["Username already exists"]);

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      username,
      email,
      rol: "customer",
      picture: picture,
      password: passwordHash,
    });

    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved._id });

    res.json({
      id: userSaved._id,
      name: userSaved.name,
      username: userSaved.username,
      email: userSaved.email,
      rol: userSaved.rol,
      token,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });

    if (!userFound)
      return res.status(400).json(["Correo electronico no encontrado"]);

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) return res.status(400).json(["Contraseña incorrecta"]);

    const token = await createAccessToken({ id: userFound._id });

    // res.cookie("token", token, { sameSite: "none", secure: true, httpOnly: true});

    res.json({
      id: userFound._id,
      name: userFound.name,
      username: userFound.username,
      email: userFound.email,
      rol: userFound.rol,
      picture: userFound.picture,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.status(200).json(["Sesion cerrada"]);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json(["Usuario no encontrado"]);

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};

//la funcion verifyToken verifica que el token recibido sea valido y que el usuario exista en la base de datos y devuelve los datos del usuario

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json(["Token no encontrado"]);

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(400).json(["Token no valido"]);

    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(400).json(["Usuario no encontrado"]);

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json("Usuario eliminado");
};

export const updateUser = async (req, res) => {
    const { name, username, email, picture } = req.body;
    try {
      const userEmailFound = await User.findOne({email: email});
      
      if (!userEmailFound) return res.status(400).json(["Usuerio inexistente"]);

      userEmailFound.name = name;
      userEmailFound.username = username;
      userEmailFound.email = email;
      userEmailFound.picture = picture;
      userEmailFound.updateUser = new Date();

      userEmailFound.save();

      res.status(200).json(userEmailFound);

    } catch (error) {
      return res.status(500).json({ message: error.message });
    } 
}

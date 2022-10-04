import { BODY_SIGN_UP } from "./auth.types";
import { RESPONSE } from "../controllers.types";
import bcrypt from "bcryptjs";

// Models
import { User } from "../../models/User";

export const createAccount = async (req, res) => {
  let response: RESPONSE = {
    isAuth: false,
    message: "",
    readMsg: true,
    typeMsg: "danger",
    data: {}
  };

  try {
    const {
      username,
      email,
      password,
      confirmPassword
    }: BODY_SIGN_UP = req.body;

    if (!username || !email || !password || !confirmPassword) {
      response.message = "La información está incompleta";
      res.json(response);
      return;
    }
    
    if (
      username.trim() == "" ||
      email.trim() == "" ||
      password.trim() == "" ||
      confirmPassword.trim() == ""
    ) {
      response.message = "La información está incompleta";
      res.json(response);
      return;
    }

    if (password != confirmPassword) {
      response.message = "Las contraseñas no coinciden";
      res.json(response);
      return;
    }

    // Check if email already registered
    const usersEmail: Array<any> = await User.findAll({
      where: {
        email
      }
    });

    const usersName: Array<any> = await User.findAll({
      where: {
        username
      }
    });

    if (usersEmail.length > 0) {
      response.message = "El correo ya está registrado";
      res.json(response);
      return;
    }

    if (usersName.length > 0) {
      response.message = "El nombre de ususario ya está registrado";
      res.json(response);
      return;
    }

    // Generate User
    const salt: string = await bcrypt.genSalt(10);
    const hashedPassword: string = await bcrypt.hash(password, salt);

    await User.create({
      email,
      password: hashedPassword,
      username
    });

    response.message = "Usuario creado con éxito!";
    response.isAuth = true;
    response.typeMsg = "success";
    res.json(response);
  } catch (error) {
    console.error(error);

    // Send Error
    response.data = {};
    response.isAuth = false;
    response.message = error.message;
    response.readMsg = true;
    response.typeMsg = "danger";
    res.json(response);
  }
};

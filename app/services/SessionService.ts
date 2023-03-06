import axios from "axios";
import { Login } from "../models/login";
import { ResponseApi } from "../models/response";

const url = "http://localhost:4000/login";

export async function GetSessions(email: string, password: string) {
  try {
    const login: Login = {
      email: email,
      password: password,
    };
    const response = await axios.post(url, login);
    const responseApi: ResponseApi = response.data;
    console.log(responseApi);
    return responseApi;
  } catch (error) {
    console.log(error);
    const responseApi: ResponseApi = {
      data: "error",
      status: 404,
      statusMsg: "Email or Password invalid",
    };
    throw responseApi;
  }
}

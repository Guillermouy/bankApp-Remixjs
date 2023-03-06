import axios from "axios";
import { ResponseApi } from "~/models/response";

const url =
  "http://localhost:4000/transactions?page=1&limit=10&from=MjAyMi0wMi0yMVQxODo0NDo0Mi41MDha&to=MjAyNC0wMi0yMVQxODo0NDo0Mi41MDha";

export async function GetTransactions() {
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    let uri = `${url}`;
    const response = await axios.get(uri, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
    const responseApi: ResponseApi = {
      data: "error",
      status: 400,
      statusMsg: "You must be logged in",
    };
    throw responseApi;
  }
}

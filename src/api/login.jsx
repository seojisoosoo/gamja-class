import axios from "axios";

export async function userLogin(newData) {
  const data = await axios.post(`http://localhost:3000/login`, newData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
}

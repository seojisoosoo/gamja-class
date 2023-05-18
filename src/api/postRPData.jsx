import axios from "axios";

export async function postRPData(newData) {
  const data = await axios.post(`http://localhost:3000/post`, newData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.sessionStorage.getItem("accessToken")}`,
    },
  });
  return data;
}

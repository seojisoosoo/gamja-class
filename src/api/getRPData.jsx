import axios from "axios";

export async function getRPData() {
  const data = await axios.get(`http://localhost:3000/get`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.sessionStorage.getItem("accessToken")}`,
    },
  });

  return data.data;
}

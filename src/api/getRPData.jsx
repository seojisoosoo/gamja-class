import axios from "axios";

export async function getRPData() {
  const data = await axios.get(`http://localhost:3000/get`);

  return data.data.loopyData;
}

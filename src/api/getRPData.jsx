import axios from "axios";

export async function getRPData() {
  const data = await axios.get(`http://localhost:3000/get`);

  console.log(data.data);
  // const data = await axios.get(`https://67f09d03-afd1-405f-bac1-4b16e02d1726.mock.pstmn.io/list/`);
  return data.data;
}

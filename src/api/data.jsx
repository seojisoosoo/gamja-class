import axios from "axios";

export async function getData() {
  try {
    const data = await axios.get(`https://67f09d03-afd1-405f-bac1-4b16e02d1726.mock.pstmn.io/list`);
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

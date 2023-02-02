import axios from "axios";
const url = `https://jsonplaceholder.typicode.com/users`;

export const GetData = async () => {
  const response = await axios.get(url);
  //   console.log(response.data)
  return response.data;
};

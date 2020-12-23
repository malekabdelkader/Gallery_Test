import axios from "axios";
export const getAlbums = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/photos")
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.error(e);
    });
};

import axios from "axios";
import { GET_DATA } from "./actiontypes";

// fetching data
export const getdataApi = () => (dispatch) => {
  axios
    .get("http://localhost:8080/user")
    .then((res) => dispatch({ type: GET_DATA, payload: res.data }))
    .catch((err) => console.log(err));
};

// posting data
export const postApi = (data) => (dispatch) => {
  axios
    .post("http://localhost:8080/user", data)
    .then((res) => alert(res.data.message))
    .catch((err) => console.log(err));
};

// deleting data
export const deleteApi = (id) => (dispatch) => {
  const config = {
    headers: {
      id,
    },
  };
  axios
    .delete("http://localhost:8080/user", config)
    .then((res) => alert(res.data))
    .catch((err) => console.log(err));
};

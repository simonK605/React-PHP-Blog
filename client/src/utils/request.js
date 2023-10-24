import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
        "Content-type": "application/json",
    }
});

const request = (method, url, data = null) => {
    return axiosAPI.request({
        method,
        url,
        data,
    }).then((response) => {
        return response;
    }).catch((error) => {
        console.log(error);
        return error.response;
    });
};

export default request;
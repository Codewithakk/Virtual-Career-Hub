import axios from "axios";

const API=axios.create({
    URL:"https://jsonplaceholder.typicode.com",
});

export default API;
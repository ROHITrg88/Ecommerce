import axios from "axios";

const FakeStore = axios.create({ baseURL: "https://fakestoreapi.com" });

export default FakeStore;

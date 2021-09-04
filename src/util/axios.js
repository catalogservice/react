import axios from "axios";
import config from '../config';

const http = axios.create({ baseURL: config.api_url });
export default http;
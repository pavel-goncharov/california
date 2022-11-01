import axios from 'axios';
import {API_URL} from 'src/constants/config';

export const host = axios.create({
  baseURL: API_URL,
});
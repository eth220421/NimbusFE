import Axios from 'axios';

const BASE_URL = "http://localhost:8080";

// Axios 인스턴스 생성 (재사용성 ↑, 코드 간결성 ↑)
export const axios = Axios.create({
    baseURL: BASE_URL,
});
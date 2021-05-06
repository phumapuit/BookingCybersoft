import axios from "axios";
const axiosClient = axios.create({
  baseURL: 'https://movie0706.cybersoft.edu.vn/api',
})
axiosClient.interceptors.request.use((config) => { //tất cả request đều phải qua đây 

  // tự động thêm Authorization vào header nếu có accessToken
  const user = localStorage.getItem('user');
  if (user) {
    const { accessToken } = JSON.parse(user)
    config.headers.common.Authorization = `Bearer ${accessToken}`;
  }
  return config;
})

export default axiosClient;
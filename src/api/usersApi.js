import axiosClient from "./axiosClient";

const usersApi = {
  //post user:object gồm taiKhoan, matKhau, email,...
  postDangKy: (user) => {
    const path = "/QuanLyNguoiDung/DangKy";
    return axiosClient.post(path, user);
  },

  //post user:object taiKhoan, matKhau => nhận về data có accessToken
  postDangNhap: (user) => {
    const path = "/QuanLyNguoiDung/DangNhap";
    return axiosClient.post(path, user);
  },

  getDanhSachNguoiDung: () => {
    const path = "/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03";
    return axiosClient.get(path);
  },

  postThemNguoiDung: (user) => {
    const path = "/QuanLyNguoiDung/ThemNguoiDung";

    return axiosClient.post(path, user);
  },

  deleteXoaNguoiDung: (taiKhoan) => {
    const path = `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;

    return axiosClient.delete(path);
  },

  editTaiKhoan: (user) => {
    const path = `/QuanLyNguoiDung/CapNhatThongTinNguoiDung`;
    return axiosClient.put(path, user);
  },

  getThongTinTaiKhoan: (info) => {
    const path = `/QuanLyNguoiDung/ThongTinTaiKhoan`;
    return axiosClient.post(path, info);
  },
};

export default usersApi;

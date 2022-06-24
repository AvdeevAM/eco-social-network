import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "6ccf6105-e883-4962-b2b8-6c64fb90e29e",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 50) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  getProfile(userId) {
    console.warn("Please use profileAPI method instead.");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhoto(photoFile) {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveData(profile) {
    return instance.put(`profile/`, profile);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance
      .post(`/auth/login`, { email, password, rememberMe, captcha })
      .then((response) => {
        return response.data;
      });
  },
  logout() {
    return instance.delete(`/auth/login`).then((response) => {
      return response.data;
    });
  },
};

export const securityAPI = {
  getCaptcha() {
    return instance.get(`security/get-captcha-url`).then((response) => {
      return response.data;
    });
  },
};

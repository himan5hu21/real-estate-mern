import axios from "axios";

export const updateUser = (userId, data) => {
  return axios.patch(`/api/user/update/${userId}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updatePassword = (userId, passwords) => {
  return axios.patch(`/api/user/update/password/${userId}`, passwords, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteUser = (userId) => {
  return axios.delete(`/api/user/delete/${userId}`);
};

export const userSignOut = () => {
  return axios.get("/api/auth/signout");
};

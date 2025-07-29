import { api } from "./apiService";

// Add a new user
export const addUser = async (name, email, password) => {
  try {
    const response = await api.post("/users", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to add user");
  }
};

// Check if a user exists by email
export const checkIfUser = async (email) => {
  try {
    const response = await api.get("/users", {
      params: { email },
    });
    return response.data.length > 0 ? response.data[0] : null;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to check user");
  }
};

// Get a user by userId
export const getUser = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data.length > 0 ? response.data[0] : null;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to get user");
  }
};

// Update a user by userId
export const updateUser = async (userId, updatedData) => {
  try {
    const response = await api.patch(`/users/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to update user");
  }
};

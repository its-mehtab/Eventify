import { api } from "./apiService";

export const login = async (email, password) => {
  const response = await api.get(`/users?email=${email}`);
  const user = response.data[0];

  if (!user || user.password !== password) {
    throw new Error("Invalid credentials");
  }

  // Create simple session (no real token)
  const session = { userId: user.id, loggedInAt: Date.now() };
  await api.post("/sessions", session);

  return {
    user: { id: user.id, name: user.name, email: user.email },
    simpleToken: `user-${user.id}-${Date.now()}`, // Mock token
  };
};

export const logout = async (userId) => {
  const sessions = await api.get(`/sessions?userId=${userId}`);
  sessions.data.forEach((session) => {
    api.delete(`/sessions/${session.id}`);
  });
};

export const checkAuth = async (userId) => {
  const response = await api.get(`/sessions?userId=${userId}`);
  return response.data.length > 0;
};

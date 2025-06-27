import { getEventById } from "./eventService";
import { api } from "./apiService";

export const getUserCartEvents = async () => {
  try {
    // For now using 'guest' as userId
    const response = await api.get("/carts", {
      params: { userId: "guest" },
    });

    // Get full event details for each Cart item
    const eventPromises = response.data.map(async (item) => {
      const event = await getEventById(item.eventId);
      return { ...event, cartId: item.id, quantity: item.quantity };
    });

    return Promise.all(eventPromises);
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to get Cart events"
    );
  }
};

// Delete Cart event
export const deleteCartEvent = async (id) => {
  try {
    const response = await api.delete(`/carts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to delete Cart event"
    );
  }
};

export const addToCart = async (eventId, quantity) => {
  try {
    const response = await api.post("/carts", {
      eventId,
      userId: "guest", // Temporary until auth
      quantity,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to add to Cart");
  }
};

export const checkIfCart = async (eventId) => {
  try {
    const response = await api.get("/carts", {
      params: { eventId },
    });
    return response.data.length > 0 ? response.data[0] : null;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to check Cart status"
    );
  }
};

export const toggleCart = async (eventId) => {
  const existingCart = await checkIfCart(eventId);
  if (existingCart) {
    return await deleteCartEvent(existingCart.id);
  } else {
    return await addToCart(eventId);
  }
};

export const updateCartQuantity = async (cartId, newQuantity) => {
  try {
    const currentCartResponse = await api.get(`/carts/${cartId}`);
    const existingQuantity = currentCartResponse.data.quantity;
    console.log(existingQuantity);

    const response = await api.patch(`/carts/${cartId}`, {
      quantity: existingQuantity + newQuantity,
    });

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to update cart quantity"
    );
  }
};

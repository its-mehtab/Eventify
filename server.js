// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";
import { data } from "./src/database/data.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json()); // or app.use(express.json())

// Utility function: filter array by query params (strict equality)
const filterByParams = (arr, query) =>
  arr.filter((item) =>
    Object.entries(query).every(
      ([key, value]) => String(item[key]) === String(value)
    )
  );

// --- EVENTS ---

app.get("/events", (req, res) => {
  const { type, q } = req.query;
  let results = data.events;

  if (type) {
    results = results.filter(
      (e) => e.type.toLowerCase() === type.toLowerCase()
    );
  }
  if (q) {
    const search = q.toLowerCase();
    results = results.filter(
      (e) =>
        e.heading.toLowerCase().includes(search) ||
        e.artist.toLowerCase().includes(search) ||
        e.description.toLowerCase().includes(search)
    );
  }
  res.json(results);
});

app.get("/events/:id", (req, res) => {
  const event = data.events.find((e) => e.id === req.params.id);
  if (!event) return res.status(404).json({ message: "Event not found" });
  res.json(event);
});

app.post("/events", (req, res) => {
  const newEvent = { ...req.body, id: uuidv4() };
  data.events.push(newEvent);
  res.status(201).json(newEvent);
});

app.put("/events/:id", (req, res) => {
  const idx = data.events.findIndex((e) => e.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Event not found" });
  data.events[idx] = { ...req.body, id: req.params.id };
  res.json(data.events[idx]);
});

app.patch("/events/:id", (req, res) => {
  const idx = data.events.findIndex((e) => e.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Event not found" });
  data.events[idx] = { ...data.events[idx], ...req.body };
  res.json(data.events[idx]);
});

app.delete("/events/:id", (req, res) => {
  const idx = data.events.findIndex((e) => e.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Event not found" });
  const [removed] = data.events.splice(idx, 1);
  res.json(removed);
});

// --- USERS ---

app.get("/users", (req, res) => {
  const filtered = Object.keys(req.query).length
    ? filterByParams(data.users, req.query)
    : data.users;
  res.json(filtered);
});

app.get("/users/:id", (req, res) => {
  const user = data.users.find((u) => u.id === req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

app.post("/users", (req, res) => {
  const { email } = req.body;
  if (data.users.some((u) => u.email === email))
    return res.status(409).json({ message: "Email already exists" });
  const newUser = { ...req.body, id: uuidv4() };
  data.users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const idx = data.users.findIndex((u) => u.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "User not found" });
  data.users[idx] = { ...req.body, id: req.params.id };
  res.json(data.users[idx]);
});

app.patch("/users/:id", (req, res) => {
  const idx = data.users.findIndex((u) => u.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "User not found" });
  data.users[idx] = { ...data.users[idx], ...req.body };
  res.json(data.users[idx]);
});

app.delete("/users/:id", (req, res) => {
  const idx = data.users.findIndex((u) => u.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "User not found" });
  const [removed] = data.users.splice(idx, 1);
  res.json(removed);
});

// --- INTERESTED ---

app.get("/interested", (req, res) => {
  const filtered = Object.keys(req.query).length
    ? filterByParams(data.interested, req.query)
    : data.interested;
  res.json(filtered);
});

app.post("/interested", (req, res) => {
  const newItem = { ...req.body, id: uuidv4() };
  data.interested.push(newItem);
  res.status(201).json(newItem);
});

app.delete("/interested/:id", (req, res) => {
  const idx = data.interested.findIndex((i) => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Not found" });
  const [removed] = data.interested.splice(idx, 1);
  res.json(removed);
});

app.patch("/interested/:id", (req, res) => {
  const idx = data.interested.findIndex((i) => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Not found" });
  data.interested[idx] = { ...data.interested[idx], ...req.body };
  res.json(data.interested[idx]);
});

app.put("/interested/:id", (req, res) => {
  const idx = data.interested.findIndex((i) => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Not found" });
  data.interested[idx] = { ...req.body, id: req.params.id };
  res.json(data.interested[idx]);
});

// --- CARTS ---

app.get("/carts", (req, res) => {
  const filtered = Object.keys(req.query).length
    ? filterByParams(data.carts, req.query)
    : data.carts;
  res.json(filtered);
});

app.post("/carts", (req, res) => {
  const { eventId, userId, quantity } = req.body;
  if (!eventId || !userId || quantity == null)
    return res.status(400).json({ message: "Missing fields" });

  const newCart = { id: uuidv4(), eventId, userId, quantity };
  data.carts.push(newCart);
  res.status(201).json(newCart);
});

app.patch("/carts/:id", (req, res) => {
  const idx = data.carts.findIndex((c) => c.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Cart not found" });
  data.carts[idx] = { ...data.carts[idx], ...req.body };
  res.json(data.carts[idx]);
});

app.put("/carts/:id", (req, res) => {
  const idx = data.carts.findIndex((c) => c.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Cart not found" });
  data.carts[idx] = { ...req.body, id: req.params.id };
  res.json(data.carts[idx]);
});

app.delete("/carts/:id", (req, res) => {
  const idx = data.carts.findIndex((c) => c.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Cart not found" });
  const [removed] = data.carts.splice(idx, 1);
  res.json(removed);
});

// --- BOOKINGS ---

app.get("/bookings", (req, res) => {
  const filtered = Object.keys(req.query).length
    ? filterByParams(data.bookings, req.query)
    : data.bookings;
  res.json(filtered);
});

app.get("/bookings/:id", (req, res) => {
  const booking = data.bookings.find((b) => b.id === req.params.id);
  if (!booking) return res.status(404).json({ message: "Booking not found" });
  res.json(booking);
});

app.post("/bookings", (req, res) => {
  const newBooking = {
    ...req.body,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
  };
  data.bookings.push(newBooking);
  res.status(201).json(newBooking);
});

app.patch("/bookings/:id", (req, res) => {
  const idx = data.bookings.findIndex((b) => b.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Booking not found" });
  data.bookings[idx] = { ...data.bookings[idx], ...req.body };
  res.json(data.bookings[idx]);
});

app.put("/bookings/:id", (req, res) => {
  const idx = data.bookings.findIndex((b) => b.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Booking not found" });
  data.bookings[idx] = { ...req.body, id: req.params.id };
  res.json(data.bookings[idx]);
});

app.delete("/bookings/:id", (req, res) => {
  const idx = data.bookings.findIndex((b) => b.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Booking not found" });
  const [removed] = data.bookings.splice(idx, 1);
  res.json(removed);
});

// --- SESSIONS ---

app.get("/sessions", (req, res) => {
  const filtered = Object.keys(req.query).length
    ? filterByParams(data.sessions, req.query)
    : data.sessions;
  res.json(filtered);
});

app.post("/sessions", (req, res) => {
  const newSession = {
    ...req.body,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
  };
  data.sessions.push(newSession);
  res.status(201).json(newSession);
});

app.delete("/sessions/:id", (req, res) => {
  const idx = data.sessions.findIndex((s) => s.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Session not found" });
  const [removed] = data.sessions.splice(idx, 1);
  res.json(removed);
});

// --- AUTH ROUTES for convenience ---

// LOGIN route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = data.users.find(
    (u) => u.email === email && u.password === password
  );
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const session = { id: uuidv4(), userId: user.id, loggedInAt: Date.now() };
  data.sessions.push(session);

  res.json({
    user: { id: user.id, name: user.name, email: user.email },
    simpleToken: `user-${user.id}-${Date.now()}`,
  });
});

// LOGOUT route (remove all sessions of user)
app.post("/logout", (req, res) => {
  const { userId } = req.body;
  if (!userId) return res.status(400).json({ message: "Missing userId" });

  data.sessions = data.sessions.filter((s) => s.userId !== userId);
  res.json({ message: "Logged out successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Eventify API listening on http://localhost:${PORT}`);
});

import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/v1";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");

  // 👇 NEW INPUT STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ---------------- AUTH ----------------

  const register = async () => {
    try {
      await axios.post(`${API}/auth/register`, {
        name,
        email,
        password
      });
      setMsg("✅ Registered successfully");
    } catch (err) {
      setMsg(err.response?.data?.msg || "❌ Registration failed");
    }
  };

  const login = async () => {
    try {
      const res = await axios.post(`${API}/auth/login`, {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      setMsg("✅ Login successful");
    } catch (err) {
      setMsg(err.response?.data?.msg || "❌ Login failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setTasks([]);
  };

  // ---------------- TASKS ----------------

  const getTasks = async () => {
    try {
      const res = await axios.get(`${API}/tasks`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTasks(res.data);
    } catch {
      setMsg("❌ Failed to fetch tasks");
    }
  };

  const addTask = async () => {
    if (!title) return;

    try {
      await axios.post(
        `${API}/tasks`,
        { title },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTitle("");
      getTasks();
    } catch {
      setMsg("❌ Failed to add task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      getTasks();
    } catch {
      setMsg("❌ Delete failed");
    }
  };

  useEffect(() => {
    if (token) getTasks();
  }, [token]);

  // ---------------- UI ----------------

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>🚀 Task Manager Dashboard</h1>

      <p>{msg}</p>

      {!token ? (
        <>
          <h3>Register / Login</h3>

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br /><br />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />

          <button onClick={register}>Register</button>
          <button onClick={login} style={{ marginLeft: "10px" }}>
            Login
          </button>
        </>
      ) : (
        <>
          <button onClick={logout}>Logout</button>

          <div style={{ marginTop: "20px" }}>
            <input
              placeholder="Enter task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={addTask} style={{ marginLeft: "10px" }}>
              Add Task
            </button>
          </div>

          <ul style={{ marginTop: "20px" }}>
            {tasks.map((t) => (
              <li key={t._id}>
                {t.title}
                <button
                  onClick={() => deleteTask(t._id)}
                  style={{ marginLeft: "10px" }}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
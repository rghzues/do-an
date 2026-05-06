import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();
const DataContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user"))
      setUser(JSON.parse(localStorage.getItem("user")));

    JSON.parse(localStorage.getItem("user"))?.role === "admin" &&
      navigate("/admin");
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.get("http://localhost:3001/users");

      const found = res.data.find(
        (u) => u.email === email && u.password === password,
      );

      localStorage.setItem("user", JSON.stringify(found));
      localStorage.setItem("Email", email);

      setUser(found);

      return !!found;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const role = user?.role || "guest";

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const DataProvider = ({ children }) => {
  const [res, setRes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [religions, setReligions] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [feedbacksLikes, setFeedbacksLikes] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    country: "",
    religion: "",
    month: "",
    sort: "new",
  });

  const fetchFavorites = useCallback(() => {
    axios
      .get("http://localhost:3001/favorites")
      .then((res) => setFavorites(res.data));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => setUsers(res.data));
    axios
      .get("http://localhost:3001/religions")
      .then((res) => setReligions(res.data));
    axios
      .get("http://localhost:3001/countries")
      .then((res) => setCountries(res.data));

    axios
      .get("http://localhost:3001/festivals")
      .then((res) => setRes(res.data));
    axios
      .get("http://localhost:3001/feedbacks")
      .then((res) => setFeedbacks(res.data));
    axios
      .get("http://localhost:3001/feedbacksLikes")
      .then((res) => setFeedbacksLikes(res.data));
    fetchFavorites();
  }, []);

  const festivals = useMemo(() => {
    return res.map((r) => ({
      ...r,
      country: countries.find((c) => c.id === r.country_id)?.name,
      religion: religions.find((rg) => rg.id === r.religion_id)?.name,
    }));
  }, [res, countries, religions]);

  return (
    <DataContext.Provider
      value={{
        festivals,
        favorites,
        fetchFavorites,
        filters,
        feedbacks,
        users,
        setFilters,
        feedbacksLikes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export const useData = () => useContext(DataContext);

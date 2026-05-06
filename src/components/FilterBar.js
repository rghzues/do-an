import { useEffect, useState } from "react";
import {useData} from "../kotex/HookContext";
import "./FilterBar.css";
import axios from "axios";

export default function FilterBar({
  mode = "home",
  search,
  setSearch,
  navbarRef,
}) {
  const { filters, setFilters } = useData();
  const [countries, setCountries] = useState([]);
  const [religions, setReligions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/countries")
      .then((res) => setCountries(res.data));

    axios
      .get("http://localhost:3001/religions")
      .then((res) => setReligions(res.data));
  }, []);
  return (
    <div className={`filter-bar ${mode === "sortfilter" ? "sort-mode" : ""}`}>
      {mode === "sortfilter" && (
        <>
          <div className="sort-content">
            <div>
              <span>
                <i
                  style={{ margin: "10px" }}
                  class="fa-solid fa-holly-berry"
                ></i>
                Kết quả các lễ hội
              </span>
              <button
                onClick={() => {
                  setFilters({
                    country: "",
                    religion: "",
                    month: "",
                    sort: "new",
                  });

                  navbarRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Các lễ hội khác
              </button>
            </div>

            <div>
              <label>
                Ngày cập nhật <i className="fa-solid fa-sort"></i>
              </label>
              <select
                value={filters.sort}
                onChange={(e) =>
                  setFilters({ ...filters, sort: e.target.value })
                }
              >
                <option value="new">Mới nhất</option>
                <option value="old">Cũ nhất</option>
              </select>
            </div>
          </div>
        </>
      )}
      {mode === "gallery" && (
        <>
          <label>
            Tìm kiếm <i class="fa-solid fa-magnifying-glass"></i>
          </label>

          <input
            type="text"
            placeholder="Tìm kiếm lễ hội..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </>
      )}
      {mode !== "sortfilter" && (
        <>
          <label>
            Quốc gia <i class="fa-solid fa-earth-europe"></i>
          </label>
          <select
            value={filters.country}
            onChange={(e) =>
              setFilters({ ...filters, country: e.target.value })
            }
          >
            <option value="">Quốc gia</option>
            {countries.map((c, index) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <label>
            Tôn giáo <i class="fa-solid fa-mosque"></i>
          </label>
          <select
            value={filters.religion}
            onChange={(e) =>
              setFilters({ ...filters, religion: e.target.value })
            }
          >
            <option value="">Tôn giáo</option>
            {religions.map((r, index) => (
              <option key={r.id} value={r.name}>
                {r.name}
              </option>
            ))}
          </select>

          <label>
            Tháng <i class="fa-solid fa-calendar-days"></i>
          </label>
          <select
            value={filters.month}
            onChange={(e) => setFilters({ ...filters, month: e.target.value })}
          >
            <option value="">Tháng</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </>
      )}
    </div>
  );
}

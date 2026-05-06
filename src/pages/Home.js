import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";
import FestivalFeatured from "../components/FestivalFeatured";
import FestivalCard from "../components/FestivalCard";
import FilterBar from "../components/FilterBar";
import CustomSwiper from "../components/CustomSwiper";
import Gallery from "../components/Gallery";
import Rating from "../components/Rating";
import useHome from "../hook/useHome";
import { Title, Br, SectionTitle } from "../components/Title";
import { TomAndJerry } from "../action/Tom&Jerry";
import { ArrowDownWideNarrow } from "lucide-react";
import { useData } from "../kotex/HookContext";

export default function Home() {
  const filterRef = useRef();
  const navbarRef = useRef();
  const navigate = useNavigate();

  const { featured, filtered, months, currently, upcoming } = useHome();
  const { festivals, filters, setFilters, favorites, fetchFavorites } =
    useData();

  const imgsrc = ["/images/img1.webp", "/images/img2.webp"];
  const three = () => {
    if (months.length > 3) return "three";
  };

  return (
    <>
      <div className="banner">
        <CustomSwiper
          type="fade"
          slides={imgsrc.map((p) => (
            <div className="slide">
              <img src={p} alt="" />
              <div className="title">
                <div className="box-title">
                  <h4>Tìm kiếm những sự kiện văn hóa độc đáo</h4>
                  <h1>World Festivals Explorer</h1>
                  <h3>
                    Trải nghiệm sắc màu văn hóa, truyền thống và những sự kiện
                    đặc sắc toàn cầu
                  </h3>
                </div>
                <button
                  className="btn-slide"
                  onClick={() => {
                    navigate("/festivals");
                  }}
                >
                  Khám phá <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        />
      </div>

      <div className="body">
        <div className="filter" ref={navbarRef}>
          <div>
            <h2 style={{ color: "#60bfe4", fontSize: "35px" }}>
              <ArrowDownWideNarrow color="#305252" size={40} />
              Thống kê
            </h2>
            <br />
            <FilterBar navbarRef={navbarRef} />
          </div>
          <img src="/images/background.png" />
          <button
            className="filter-btn"
            onClick={() =>
              filterRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Xem ngay
          </button>
        </div>
      </div>
      <Br br={12} />
      <Title
        name="Các lễ hội nổi bật"
        namedown="Các lễ hội nổi bật với sắc màu và truyền thống độc đáo"
        down={2}
        hr="a"
      />

      <section className="featured">
        <CustomSwiper
          slides={[
            <div className="festival-grid">
              {(featured.length <= 4
                ? featured.slice(0, 2)
                : featured.slice(0, 3)
              ).map((item) => (
                <FestivalFeatured key={item.id} item={item} />
              ))}
            </div>,

            featured.length > 2 && (
              <div className="festival-grid">
                {(featured.length <= 4
                  ? featured.slice(2, 6)
                  : featured.slice(3, 6)
                ).map((item) => (
                  <FestivalFeatured key={item.id} item={item} />
                ))}
              </div>
            ),
          ]}
        />
      </section>

      <Br br={1} />

      <Title />

      {!(filters.country || filters.religion || filters.month) && (
        <TomAndJerry />
      )}

      <section ref={filterRef} className="filterRef">
        {(filters.country || filters.religion || filters.month) && (
          <>
            <div className="body">
              <FilterBar mode="sortfilter" navbarRef={navbarRef} />
            </div>

            <Br br={2} />

            <CustomSwiper
              type="fade"
              component="festivalcard"
              slides={filtered.map((item) => (
                <div className="body" key={item.festivalId}>
                  <div className="filter-grid">
                    <FestivalCard
                      item={item}
                      Status="none"
                      featured={featured}
                    />
                  </div>
                </div>
              ))}
            />
          </>
        )}
        {!(filtered.length > 0) &&
          (filters.country || filters.religion || filters.month) && (
            <div className="body">
              <h3>Không tìm thấy dữ liệu phù hợp</h3>
            </div>
          )}
      </section>

      {months.length === 0 && (
        <>
          <Br br={4} />
          <Title name="Các lễ hội trong tháng" up={3} down={4} />

          <div className="empty">
            <h3>Chưa có lễ hội nào trong thời gian này</h3>

            <p>Kiểm tra các lễ hội sắp tới hoặc khám phá tất cả các sự kiện.</p>
          </div>
        </>
      )}

      {months.length !== 0 && (
        <>
          <Title hr="hr" />

          <SectionTitle name="Các lễ hội trong tháng" down={2} up={4} />

          <CustomSwiper
            component="month"
            slides={[
              <div className="body">
                <div className={`month-grid ${three()}`}>
                  {months.slice(0, 4).map((item) => (
                    <div key={item.id}>
                      <FestivalCard item={item} />
                    </div>
                  ))}
                </div>
              </div>,
              months.slice(4, 8).length > 0 && (
                <div className="body">
                  <div className={`month-grid ${three()}`}>
                    {months.slice(4, 8).map((item) => (
                      <div key={item.id}>
                        <FestivalCard item={item} />
                      </div>
                    ))}
                  </div>
                </div>
              ),
            ]}
          />
        </>
      )}
      <Br br={4} />

      <Title
        name="Bộ sưu tập"
        nameup="Thư viện ảnh"
        namedown="Khám phá những khoảnh khắc được tuyển chọn"
        up={3}
        down={1}
      />

      <Gallery />

      <Title name="Đánh giá hàng đầu" nameup="Top Review" up={5} hr="hr" />

      <div style={{ padding: "20px 8%" }}>
        <Rating />
      </div>

      <Title up={1} hr="hr" />
    </>
  );
}

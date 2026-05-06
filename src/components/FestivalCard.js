import { useState, useMemo } from "react";
import { Heart, HeartCrack } from "lucide-react";
import "./FestivalCard.css";
import FestivalModal from "./FestivalModal";
import { useAuth, useData } from "../kotex/HookContext";
import axios from "axios";
import { useRef } from "react";

export default function FestivalCard({ item, Status = "month" }) {
  const { user } = useAuth();
  const { favorites, fetchFavorites } = useData();
  const [selected, setSelected] = useState(null);
  const [fakeLike, setFakeLike] = useState(false);

  const liked = favorites.some(
    (f) => f.userId === user?.id && f.festivalId === item.id,
  );

  const getStatus = () => {
    if (new Date() < new Date(item.startDate)) return "upcoming";
    if (
      new Date() >= new Date(item.startDate) &&
      new Date() <= new Date(item.endDate)
    )
      return "currently";
    return "past";
  };

  const toggleLike = async (e) => {
    if (!user?.id) {
      setFakeLike(!fakeLike);
      return;
    }

    const existing = favorites.find(
      (f) => f.userId === user.id && f.festivalId === item.id,
    );

    if (existing) {
      await axios.delete(`http://localhost:3001/favorites/${existing.id}`);
    } else {
      await axios.post("http://localhost:3001/favorites", {
        userId: user.id,
        festivalId: item.id,
      });
    }
    fetchFavorites();
  };

  const getComponent = () => {
    if (Status === "month") return `month ${getStatus()}`;
    if (Status === "gallery") return "gallery";
    return "";
  };

  return (
    <>
      <div
        class={`festival-card  ${getComponent()}`}
        onClick={() => setSelected(item)}
      >
        <div class="box ">
          <div class="img">
            <img src={item.images[0]} alt={item.name} />
          </div>

          {Status !== "gallery" ? (
            <>
              {Status === "none" ? (
                <div class="info">
                  <div class="info-left">
                    <h3>{item.name}</h3>

                    <span
                      class={`like-btn ${(liked && user?.id) || fakeLike ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike();
                      }}
                    >
                      {liked ? <Heart /> : <HeartCrack />}
                    </span>

                    <span>
                      <i class="fa-solid fa-earth-europe"></i>
                      {item.country}
                    </span>

                    <span>
                      <i class="fa-solid fa-mosque"></i>
                      {item.religion}
                    </span>

                    <span>
                      <i class="fa-solid fa-calendar-days"></i>
                      {new Date(item.startDate).toLocaleString("vi-VN", {
                        year: "numeric",
                        day: "2-digit",
                        month: "2-digit",
                      })}
                    </span>
                  </div>

                  <div class="info-right">
                    <h4>
                      <i class="fa-solid fa-audio-description"></i> Description
                    </h4>
                    <p>{item.history}</p>
                  </div>
                </div>
              ) : Status === "month" ? (
                <div class="info">
                  <h3>{item.name} festival</h3>

                  <span
                    class={`like-btn ${(liked && user?.id) || fakeLike ? "active" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike();
                    }}
                  >
                    {liked ? <Heart /> : <HeartCrack />}
                  </span>

                  <div class="info-left">
                    {user?.id ? (
                      <span>
                        <i class="fa-solid fa-heart"></i>
                        {item.likes}
                      </span>
                    ) : null}
                    <span>
                      <i class="fa-solid fa-earth-europe"></i>
                      {item.country}
                    </span>
                    <span>
                      <i class="fa-solid fa-mosque"></i>
                      {item.religion}
                    </span>
                    <span>
                      <i class="fa-solid fa-calendar-days"></i>
                      {new Date(item.startDate).toLocaleString("en-EN", {
                        month: "long",
                      })}
                    </span>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          ) : (
            <div class="card-content">
              <h3>{item.name}</h3>
              <span>{item.description}</span>
            </div>
          )}
        </div>
      </div>

      <FestivalModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}

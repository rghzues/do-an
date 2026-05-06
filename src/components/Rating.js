import "./Rating.css";
import { useMemo } from "react";
import { useData, useAuth } from "../kotex/HookContext";
import MeowRating from "../action/Meow";

export default function Rating() {
  const { feedbacks, users, festivals, feedbacksLikes } = useData();

  const liked = useMemo(() => {
    return feedbacksLikes.reduce((acc, like) => {
      acc[like.feedbacksId] = (acc[like.feedbacksId] || 0) + 1;
      return acc;
    }, {});
  }, [feedbacksLikes]);

  const userFeedbacks = feedbacks
    .map((f) => ({
      ...f,
      user: users.find((u) => u.id === f.userId),
      festival: festivals.find((u) => u.id === f.festivalId),
      like: liked[f.id],
    }))
    .sort((a, b) => b.like - a.like);

  const layouts = ["rating-mid", "rating-left", "rating-right"];
  console.log(userFeedbacks);
  return (
    <>
      {" "}
      <div className="rating-box">
        {layouts.map((Position, index) =>
          userFeedbacks[index] ? (
            <div className={`top-rating ${Position}`}>
              <div className="rating-head">
                <img
                  src={userFeedbacks[index].festival.images[0]}
                  alt={userFeedbacks[index].user.name}
                  className="avatar"
                />

                <div className="rating-info">
                  <h4>{userFeedbacks[index].user.name}</h4>
                  <span>Top Reviewer :{userFeedbacks[index].date}</span>
                </div>

                <div className="badge">
                  <i class="fa-solid fa-crown"></i>
                  Top comment:{index + 1}
                </div>
              </div>

              <p className="rating-text">{userFeedbacks[index].content}</p>

              <div className="rating-footer">
                <span>
                  <i class="fa-solid fa-heart"></i>{" "}
                  {userFeedbacks[index].like || 0}
                </span>
              </div>

              <div className="fes-rating">
                <img
                  src={userFeedbacks[index].festival.images[0]}
                  alt={userFeedbacks[index].festival.name}
                  className="avatar"
                />
                <div className="rating-info">
                  <h4>{userFeedbacks[index].festival.name}</h4>
                  <span>{userFeedbacks[index].festival.description}</span>
                </div>
                <MeowRating rating={userFeedbacks[index].rating} />
              </div>
            </div>
          ) : null,
        )}
      </div>
      <div className="table-responsive table-box">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Top</th>
              <th>Lễ hội</th>
              <th>Đánh giá</th>
              <th></th>
              <th>Người dùng</th>
              <th>Bình luận</th>
            </tr>
          </thead>

          <tbody>
            {userFeedbacks
              ?.slice(3, userFeedbacks.length)
              ?.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 3}</td>
                  <td>{item.festival.name}</td>
                  <td>
                    <MeowRating rating={item.rating} />
                  </td>
                  <td>{item.user.avatar}</td>
                  <td>{item.user.name}</td>
                  <td>{item.content}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

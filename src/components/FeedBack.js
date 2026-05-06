import { useState, useEffect } from "react";
import axios from "axios";
import Star from "../action/Meow";
import "./FeedBack.css";

export default function FeedbackSection({ festivalId }) {
  const [list, setList] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // load feedback
  useEffect(() => {
    axios
      .get("http://localhost:3001/feedback")
      .then((res) =>
        setList(res.data.filter((f) => f.festivalId === festivalId)),
      );
  }, [festivalId]);

  // submit feedback
  const handleSubmit = async () => {
    if (!rating || !comment) return;

    const newFeedback = {
      festivalId,
      userId: 1,
      userName: "User",
      rating,
      comment,
      createdAt: new Date().toISOString(),
    };

    await axios.post("http://localhost:3001/feedback", newFeedback);

    setList((prev) => [newFeedback, ...prev]);
    setRating(0);
    setComment("");
  };

  return (
    <div className="feedback">
      <h3>Đánh giá</h3>

      {/* FORM */}
      <div className="feedback-form">
        <Star value={rating} onChange={setRating} />

        <textarea
          placeholder="Viết cảm nhận..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button onClick={handleSubmit}>Gửi đánh giá</button>
      </div>

      {/* LIST */}
      <div className="feedback-list">
        {list.map((item) => (
          <div key={item.id} className="feedback-item">
            <b>{item.userName}</b>

            <div>⭐ {item.rating}/5</div>

            <p>{item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

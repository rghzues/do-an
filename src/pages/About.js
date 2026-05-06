import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <img src="/images/img3.jpg" alt="banner" />

        <div className="about-title">
          <h1>THông tin về Chúng Tôi</h1>
          <p>Khám phá các lễ hội trên khắp thế giới</p>
        </div>
      </div>

      <div className="about-content">
        <h2>Chúng Tôi Là Ai</h2>
        <div className="about-line"></div>

        <p>
          <span className="highlight">MOONLIGHT EVENTS</span> Tổ chức các lễ hội
          trên khắp thế giới, hợp tác với chính quyền địa phương và các hiệp hội
          thành phố.
        </p>

        <p>
          Các lễ hội của chúng tôi nhằm nâng cao hiểu biết về văn hóa, thúc đẩy
          sự khoan dung và tôn vinh những truyền thống và biểu đạt nghệ thuật
          độc đáo.
        </p>

        <p>
          Chúng tôi kết nối mọi người qua các lễ hội, khuyến khích sự sáng tạo
          và hỗ trợ trao đổi văn hóa toàn cầu.
        </p>

        <p>
          Nền tảng của chúng tôi cung cấp thông tin chi tiết về các lễ hội được
          phân loại theo quốc gia và văn hóa trên toàn thế giới.
        </p>
      </div>
    </div>
  );
}

export default About;

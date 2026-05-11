import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const navLinks = {
    "Khám Phá": [
      { label: "Tất cả lễ hội", href: "#" },
      { label: "Lễ hội nổi bật", href: "#" },
      { label: "Lễ hội trong tháng", href: "#" },
      { label: "Theo quốc gia", href: "#" },
      { label: "Theo tôn giáo", href: "#" },
    ],
    "Thông Tin": [
      { label: "About", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Contact", href: "#" },
      { label: "My Downloads", href: "#" },
    ],
    "Tài Khoản": [
      { label: "Đăng ký", href: "#" },
      { label: "Đăng nhập", href: "#" },
      { label: "Hồ sơ cá nhân", href: "#" },
      { label: "Lễ hội đã lưu", href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "#",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Nunito:wght@400;500;600&display=swap');

        .wfe-footer {
          background: linear-gradient(160deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%);
          color: #cbd5e1;
          font-family: 'Nunito', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .wfe-footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #06b6d4, #3b82f6, #06b6d4);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .wfe-footer-globe {
          position: absolute;
          top: -80px; right: -80px;
          width: 320px; height: 320px;
          border-radius: 50%;
          border: 1px solid rgba(6,182,212,0.08);
          box-shadow: inset 0 0 60px rgba(6,182,212,0.04);
          pointer-events: none;
        }
        .wfe-footer-globe::after {
          content: '';
          position: absolute;
          inset: 20px;
          border-radius: 50%;
          border: 1px solid rgba(6,182,212,0.06);
        }

        .wfe-footer-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 32px 40px;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 48px;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .wfe-footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 640px) {
          .wfe-footer-main {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 48px 24px 32px;
          }
        }

        /* Brand column */
        .wfe-brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          text-decoration: none;
        }
        .wfe-brand-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #06b6d4, #2563eb);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
          box-shadow: 0 4px 16px rgba(6,182,212,0.3);
          flex-shrink: 0;
        }
        .wfe-brand-text {
          display: flex;
          flex-direction: column;
        }
        .wfe-brand-title {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: #f1f5f9;
          line-height: 1.2;
        }
        .wfe-brand-sub {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #06b6d4;
          margin-top: 2px;
        }

        .wfe-brand-desc {
          font-size: 14px;
          line-height: 1.7;
          color: #94a3b8;
          margin-bottom: 24px;
          max-width: 280px;
        }

        /* Newsletter */
        .wfe-newsletter-label {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #06b6d4;
          margin-bottom: 10px;
        }
        .wfe-newsletter-form {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }
        .wfe-newsletter-input {
          flex: 1;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(6,182,212,0.2);
          border-radius: 8px;
          padding: 10px 14px;
          color: #f1f5f9;
          font-size: 13px;
          font-family: 'Nunito', sans-serif;
          outline: none;
          transition: border-color 0.2s;
        }
        .wfe-newsletter-input::placeholder { color: #475569; }
        .wfe-newsletter-input:focus { border-color: #06b6d4; }
        .wfe-newsletter-btn {
          background: linear-gradient(135deg, #06b6d4, #2563eb);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 10px 16px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.2s, transform 0.15s;
          font-family: 'Nunito', sans-serif;
        }
        .wfe-newsletter-btn:hover { opacity: 0.85; transform: translateY(-1px); }
        .wfe-newsletter-success {
          font-size: 13px;
          color: #34d399;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Social icons */
        .wfe-social-row {
          display: flex;
          gap: 10px;
          margin-top: 8px;
        }
        .wfe-social-link {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          color: #94a3b8;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
        }
        .wfe-social-link:hover {
          background: rgba(6,182,212,0.15);
          border-color: rgba(6,182,212,0.4);
          color: #06b6d4;
          transform: translateY(-2px);
        }

        /* Nav columns */
        .wfe-nav-col h4 {
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-weight: 600;
          color: #f1f5f9;
          margin: 0 0 18px 0;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(6,182,212,0.15);
        }
        .wfe-nav-col ul {
          list-style: none;
          margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 10px;
        }
        .wfe-nav-col a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s, padding-left 0.2s;
        }
        .wfe-nav-col a::before {
          content: '';
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #06b6d4;
          opacity: 0;
          transition: opacity 0.2s;
          flex-shrink: 0;
        }
        .wfe-nav-col a:hover {
          color: #e2e8f0;
          padding-left: 4px;
        }
        .wfe-nav-col a:hover::before { opacity: 1; }

        /* Stats bar */
        .wfe-stats-bar {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 32px;
          display: flex;
          justify-content: center;
          gap: 48px;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          position: relative;
          z-index: 1;
          flex-wrap: wrap;
        }
        .wfe-stat {
          text-align: center;
        }
        .wfe-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: #06b6d4;
          display: block;
          line-height: 1;
          margin-bottom: 4px;
        }
        .wfe-stat-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #64748b;
        }

        /* Bottom bar */
        .wfe-footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }
        .wfe-copyright {
          font-size: 13px;
          color: #475569;
        }
        .wfe-copyright span { color: #06b6d4; }
        .wfe-bottom-links {
          display: flex;
          gap: 20px;
          list-style: none;
          margin: 0; padding: 0;
        }
        .wfe-bottom-links a {
          font-size: 12px;
          color: #475569;
          text-decoration: none;
          transition: color 0.2s;
        }
        .wfe-bottom-links a:hover { color: #06b6d4; }

        .wfe-back-top {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(6,182,212,0.1);
          border: 1px solid rgba(6,182,212,0.2);
          display: flex; align-items: center; justify-content: center;
          color: #06b6d4;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .wfe-back-top:hover {
          background: rgba(6,182,212,0.2);
          transform: translateY(-2px);
        }
      `}</style>

      <footer className="wfe-footer">
        <div className="wfe-footer-globe" />

        {/* Main grid */}
        <div className="wfe-footer-main">
          {/* Brand + Newsletter */}
          <div>
            <a href="#" className="wfe-brand-logo">
              <div className="wfe-brand-icon">🌏</div>
              <div className="wfe-brand-text">
                <span className="wfe-brand-title">Lễ Hội</span>
                <span className="wfe-brand-sub">World Festivals Explorer</span>
              </div>
            </a>
            <p className="wfe-brand-desc">
              Trải nghiệm sắc màu văn hóa, truyền thống và những sự kiện đặc sắc toàn cầu. Khám phá hàng nghìn lễ hội từ khắp nơi trên thế giới.
            </p>

            <div className="wfe-newsletter-label">📬 Nhận thông báo lễ hội</div>
            {subscribed ? (
              <div className="wfe-newsletter-success">
                <span>✅</span> Đăng ký thành công! Cảm ơn bạn.
              </div>
            ) : (
              <form className="wfe-newsletter-form" onSubmit={handleSubscribe}>
                <input
                  className="wfe-newsletter-input"
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="wfe-newsletter-btn" type="submit">
                  Đăng ký
                </button>
              </form>
            )}

            <div className="wfe-social-row">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.href} className="wfe-social-link" title={s.name} aria-label={s.name}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(navLinks).map(([title, links]) => (
            <div key={title} className="wfe-nav-col">
              <h4>{title}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="wfe-stats-bar">
          {[
            { num: "2,400+", label: "Lễ hội" },
            { num: "195", label: "Quốc gia" },
            { num: "50+", label: "Tôn giáo & Văn hóa" },
            { num: "12", label: "Tháng trong năm" },
          ].map((s) => (
            <div key={s.label} className="wfe-stat">
              <span className="wfe-stat-num">{s.num}</span>
              <span className="wfe-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="wfe-footer-bottom">
          <p className="wfe-copyright">
            © 2024 <span>World Festivals Explorer</span>. Bảo lưu mọi quyền.
          </p>
          <ul className="wfe-bottom-links">
            <li><a href="#">Chính sách bảo mật</a></li>
            <li><a href="#">Điều khoản sử dụng</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
          <button
            className="wfe-back-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            title="Lên đầu trang"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import n1 from "../components/assets/instagram (1).png";
import n2 from "../components/assets/twitter.png";
import n3 from "../components/assets/facebook.png";
import { Link } from "react-router-dom";
const Footerrez = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        width: "1274px",
        marginLeft: "245px",
        padding: "10px 0",
      }}
    >
      <div
        style={{
          maxWidth: "112rem",
          margin: "0 auto",
          paddingLeft: "5rem",
          paddingRight: "1rem",
          paddingTop: "4rem",
          "@media (min-width: 640px)": {
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          },
          "@media (min-width: 1024px)": {
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
            "@media (min-width: 768px)": {
              gridTemplateColumns: "repeat(4, 1fr)",
            },
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              Компания
            </h3>
            <ul>
              <li className="liFooter" style={{ marginBottom: "0.5rem" }}>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={"/about"}
                >
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      hover: { textDecoration: "underline" },
                    }}
                  >
                    О нас
                  </a>
                </Link>
              </li>
              <li className="liFooter" style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    hover: { textDecoration: "underline" },
                  }}
                >
                  Вакансии
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              Сообщества
            </h3>
            <ul>
              <li className="liFooter" style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    hover: { textDecoration: "underline" },
                  }}
                >
                  Для исполнителей
                </a>
              </li>
              <li className="liFooter" style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    hover: { textDecoration: "underline" },
                  }}
                >
                  Для разработчиков
                </a>
              </li>
              <li className="liFooter" style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    hover: { textDecoration: "underline" },
                  }}
                >
                  Реклама
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              Полезные ссылки
            </h3>
            <ul>
              <li className="liFooter" style={{ marginBottom: "0.5rem" }}>
                <a
                  href={"/support"}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    hover: { textDecoration: "underline" },
                  }}
                >
                  Справка
                </a>
              </li>
              <li className="liFooter" style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    hover: { textDecoration: "underline" },
                  }}
                >
                  Бесплатное мобильное приложение
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              Планы Spotify
            </h3>
            <ul>
              <li className="liFooter" style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    hover: { textDecoration: "underline" },
                  }}
                >
                  Индивидуальная подписка Spotify Premium
                </a>
              </li>

              <li className="liFooter" style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    hover: { textDecoration: "underline" },
                  }}
                >
                  Premium для студентов
                </a>
              </li>
              <li className="liFooter" style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    hover: { textDecoration: "underline" },
                  }}
                >
                  Premium для двоих
                </a>
              </li>
              <li className="liFooter" style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    hover: { textDecoration: "underline" },
                  }}
                >
                  Индивидуальная подписка
                </a>
              </li>
              <li className="liFooter" style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    hover: { textDecoration: "underline" },
                  }}
                >
                  Бесплатная версия Spotify
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ fontSize: "0.875rem" }}>&copy; 2024 Spotify AB</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="https://www.instagram.com/spotify/"
              style={{ color: "inherit", hover: { color: "#71717a" } }}
              target="_blank"
            >
              <img alt="Instagram" src={n1} />
            </a>
            <a
              href="https://x.com/Spotify?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              style={{ color: "inherit", hover: { color: "#71717a" } }}
              target="_blank"
            >
              <img alt="Twitter" src={n2} />
            </a>
            <a
              href="https://www.facebook.com/Spotify/"
              style={{ color: "inherit", hover: { color: "#71717a" } }}
              target="_blank"
            >
              <img alt="Facebook" src={n3} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footerrez;

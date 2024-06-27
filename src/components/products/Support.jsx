import React from "react";
import spotifyLogo from "../assets/social (1).png";
import userLogo from "../assets/user.png";

const Support = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #16a34a, #000)",
        minHeight: "100vh",
        color: "white",
        width: "1274px",
        marginLeft: "245px",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 0",
          }}
        >
          <img src={spotifyLogo} alt="logo" style={{ height: "40px" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              style={{
                background: "white",
                color: "black",
                fontWeight: 600,
                padding: "8px 16px",
                borderRadius: "20px",
                border: "none",
              }}
            >
              Узнать больше о Premium
            </button>
            <button
              style={{
                background: "black",
                color: "white",
                border: "1px solid white",
                padding: "8px 16px",
                borderRadius: "20px",
                border: "none",
              }}
            >
              Установить приложение
            </button>
            <img
              src={userLogo}
              alt="profile"
              style={{ height: "40px", borderRadius: "9999px" }}
            />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "18px" }}>Служба поддержки Spotify</p>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              margin: "16px 0",
            }}
          >
            Мы всегда готовы помочь
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              paddingBottom: "0.5rem",
            }}
          >
            <img src={userLogo} alt="user-icon" style={{ height: "40px" }} />
            <p style={{ fontSize: "20px" }}>Привет, Manya!</p>
          </div>
          <div
            style={{
              marginTop: "24px",
              maxWidth: "585px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input
              type="text"
              placeholder="Поиск"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "4px",
                background: "white",
                color: "black",
                border: "none",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gridTemplateColumns: "1fr",
            gap: "16px",
            marginTop: "32px",
            justifyContent: "center",
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              width: "590px",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {" "}
            <div
              style={{
                backgroundColor: "rgb(175, 40, 150)",
                color: "white",
                padding: "1rem",
                borderRadius: "0.25rem",
                display: "flex",
                // alignItems: "center",
                position: "relative",
                width: "150px",
                height: "60px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  zIndex: "999",
                }}
              >
                Помощь с платежами
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 4,
                  width: "25%",
                }}
              >
                <img
                  src="https://cdn.sanity.io/images/tsbk0zvv/production/a1f5c90620915aba2fc363330ecd1dbff17b7736-128x128.png?w=64&fit=max&auto=format"
                  alt="Anime Now"
                  style={{
                    width: "60px",
                    transform: "rotate(27deg)",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#537aa1",
                color: "white",
                padding: "1rem",
                borderRadius: "0.25rem",
                display: "flex",
                // alignItems: "center",
                position: "relative",
                gap: "1rem",
                width: "150px",
                height: "60px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  zIndex: "999",
                }}
              >
                Помощь с аккаунтом
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 4,
                  width: "25%",
                }}
              >
                <img
                  src="https://cdn.sanity.io/images/tsbk0zvv/production/972abc9b7961e17d356b069c8be9dbaaf3ea51f3-128x128.png?w=64&fit=max&auto=format"
                  alt="Anime Now"
                  style={{
                    width: "60px",
                    transform: "rotate(27deg)",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#8c1932",
                color: "white",
                padding: "1rem",
                borderRadius: "0.25rem",
                display: "flex",
                // alignItems: "center",
                position: "relative",
                gap: "1rem",
                width: "150px",
                height: "60px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  zIndex: "999",
                }}
              >
                Справка по подпискам
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 4,
                  width: "25%",
                }}
              >
                <img
                  src="https://cdn.sanity.io/images/tsbk0zvv/production/10bb309130cdd8dfe85a0e0e130ecdedc0ca22c6-128x128.png?w=64&fit=max&auto=format"
                  alt="Anime Now"
                  style={{
                    width: "60px",
                    transform: "rotate(27deg)",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#b06239",
                color: "white",
                padding: "1rem",
                borderRadius: "0.25rem",
                display: "flex",
                // alignItems: "center",
                position: "relative",
                gap: "1rem",
                width: "150px",
                height: "60px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  zIndex: "999",
                }}
              >
                Справка по приложению
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 4,
                  width: "25%",
                }}
              >
                <img
                  src="https://cdn.sanity.io/images/tsbk0zvv/production/59459c592409b198e88b2b4cd6e4da99306a04fa-128x128.png?w=64&fit=max&auto=format"
                  alt="Anime Now"
                  style={{
                    width: "60px",
                    transform: "rotate(27deg)",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#006450",
                color: "white",
                padding: "1rem",
                borderRadius: "0.25rem",
                display: "flex",
                // alignItems: "center",
                position: "relative",
                gap: "1rem",
                width: "150px",
                height: "60px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  zIndex: "999",
                }}
              >
                Справка по устройствам
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 4,
                  width: "25%",
                }}
              >
                <img
                  src="https://cdn.sanity.io/images/tsbk0zvv/production/3e2fdd408d9175cbf6dc77fbd24fa0667aec5867-128x128.png?w=64&fit=max&auto=format"
                  alt="Anime Now"
                  style={{
                    width: "60px",
                    transform: "rotate(27deg)",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#757575",
                color: "white",
                padding: "1rem",
                borderRadius: "0.25rem",
                display: "flex",
                // alignItems: "center",
                position: "relative",
                gap: "1rem",
                width: "150px",
                height: "60px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  zIndex: "999",
                }}
              >
                Безопасность <br /> и конфиденциальноть
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 4,
                  width: "25%",
                }}
              >
                <img
                  src="https://cdn.sanity.io/images/tsbk0zvv/production/c39439e03b41892767854a2dafae387d68e397c5-128x128.png?w=64&fit=max&auto=format"
                  alt="Anime Now"
                  style={{
                    width: "60px",
                    transform: "rotate(27deg)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

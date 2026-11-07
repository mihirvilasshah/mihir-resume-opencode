import { ImageResponse } from "next/og";

export const alt =
  "Mihir Shah — Principal Engineer. Architecting scalable systems. Leading high-impact engineering teams.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080a0e",
          color: "#f5f3ff",
          padding: "64px 72px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-260px",
            left: "180px",
            width: "900px",
            height: "620px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.35) 0%, rgba(99,102,241,0) 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "#141826",
                border: "1px solid rgba(255,255,255,0.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 600,
                marginRight: "18px",
              }}
            >
              M
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "22px", fontWeight: 600 }}>
                Mihir Shah
              </div>
              <div
                style={{
                  fontSize: "12px",
                  letterSpacing: "4px",
                  color: "#8b93a7",
                  marginTop: "6px",
                }}
              >
                PRINCIPAL ENGINEER · TRICON INFOTECH
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid rgba(198,242,78,0.35)",
              borderRadius: "9999px",
              padding: "10px 18px",
              fontSize: "13px",
              letterSpacing: "2px",
              color: "#c6f24e",
            }}
          >
            BENGALURU, IN
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: "-3px",
            }}
          >
            Architecting scalable systems.
          </div>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: "-3px",
              color: "#a5b4fc",
              fontStyle: "italic",
              marginTop: "6px",
            }}
          >
            Leading high-impact teams.
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#8b93a7",
              marginTop: "28px",
              maxWidth: "820px",
              lineHeight: 1.5,
            }}
          >
            8+ years building accessible, high-performance products in Angular,
            React, TypeScript and Node.js.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "26px",
            position: "relative",
          }}
        >
          <div style={{ display: "flex" }}>
            {[
              ["08+", "YEARS"],
              ["04", "PROJECTS LED"],
              ["18", "PROJECTS SHIPPED"],
              ["48H", "POC → CLIENT"],
            ].map(([value, label], index) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: index === 3 ? "0px" : "56px",
                }}
              >
                <div style={{ fontSize: "30px", fontWeight: 600 }}>{value}</div>
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "2.5px",
                    color: "#8b93a7",
                    marginTop: "4px",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "3px",
              color: "#8b93a7",
            }}
          >
            WCAG 2.1 AA · ANGULAR · REACT · NODE.JS
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

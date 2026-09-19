import { ImageResponse } from "next/og";

export const alt = "CODEXIA — Convierte tus ideas en productos digitales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "radial-gradient(800px 400px at 20% 0%, rgba(61,91,255,0.32), transparent 55%), radial-gradient(700px 380px at 100% 100%, rgba(167,139,250,0.18), transparent 50%), #0B1224",
          color: "#F4F6FB",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 999,
              border: "2px solid rgba(196,181,253,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            CK
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, letterSpacing: 10, fontWeight: 700 }}>
              CODEXIA
            </div>
            <div style={{ fontSize: 16, color: "#8B93A7", letterSpacing: 3 }}>
              IDEAS + CODIGO = SOLUCIONES
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              fontWeight: 800,
              maxWidth: 980,
            }}
          >
            Convierte tus ideas en productos digitales.
          </div>
          <div style={{ fontSize: 28, color: "#C5CBD8", maxWidth: 820 }}>
            Desarrollo web, apps, automatizaciones y asesorías tecnológicas
            para negocios.
          </div>
        </div>
      </div>
    ),
    size,
  );
}

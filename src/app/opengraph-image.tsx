import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "CODEXIA — Convierte tus ideas en productos digitales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoBuffer = await readFile(
    join(process.cwd(), "public/brand/codexia-mark.png"),
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          background:
            "radial-gradient(900px 480px at 50% 10%, rgba(27, 116, 207,0.32), transparent 60%), #0A1326",
          color: "#F8FAFC",
        }}
      >
        <div
          style={{
            width: 260,
            height: 260,
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 0 80px rgba(89, 181, 244, 0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#080e1a",
          }}
        >
          <img
            src={logoSrc}
            alt="CODEXIA"
            width={260}
            height={260}
            style={{
              width: 260,
              height: 260,
              objectFit: "cover",
              // El círculo del logo ocupa ~76% de la imagen: su anillo queda como borde
              transform: "scale(1.31)",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: 14,
            }}
          >
            CODEXIA
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#8ed0fa",
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            IDEAS + CODIGO = SOLUCIONES
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 28,
              color: "#CBD5E1",
              textAlign: "center",
              maxWidth: 780,
            }}
          >
            Convierte tus ideas en productos digitales
          </div>
        </div>
      </div>
    ),
    size,
  );
}

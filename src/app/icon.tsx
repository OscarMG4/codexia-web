import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

// Favicon circular con fondo transparente, recortado del logo
export default async function Icon() {
  const logo = await readFile(join(process.cwd(), "public/brand/codexia-mark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          borderRadius: "50%",
          overflow: "hidden",
          background: "#05080f",
        }}
      >
        <img
          src={logoSrc}
          alt=""
          width={512}
          height={512}
          // El círculo del logo ocupa ~76% de la imagen: se amplía para que su anillo sea el borde
          style={{ width: 512, height: 512, transform: "scale(1.31)" }}
        />
      </div>
    ),
    size,
  );
}

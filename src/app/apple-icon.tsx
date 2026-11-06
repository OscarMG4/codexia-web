import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS no admite transparencia en el ícono: el logo circular va sobre el navy de su borde
export default async function AppleIcon() {
  const logo = await readFile(join(process.cwd(), "public/brand/codexia-mark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#060b19" }}>
        <img src={logoSrc} alt="" width={180} height={180} style={{ width: 180, height: 180 }} />
      </div>
    ),
    size,
  );
}

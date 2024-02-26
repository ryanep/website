import fs from "node:fs/promises";
import path from "node:path";
import { favicons } from "favicons";

const source = "./docs/icon.svg";
const destination = "./public/icons";
const htmlBasename = "index.html";

const configuration = {
  appleStatusBarStyle: "black-translucent",
  background: "#3c1f1f",
  dir: "auto",
  display: "standalone",
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    favicons: true,
    windows: false,
    yandex: false,
  },
  lang: "en-GB",
  path: "/icons",
  theme_color: "#3c1f1f",
  version: "1.0",
};

const main = async () => {
  const response = await favicons(source, configuration);

  await fs.mkdir(destination, { recursive: true });

  await Promise.all(
    response.images.map(async (image) => {
      await fs.writeFile(path.join(destination, image.name), image.contents);
    })
  );

  await Promise.all(
    response.files.map(async (file) => {
      await fs.writeFile(path.join(destination, file.name), file.contents);
    })
  );

  await fs.writeFile(
    path.join(destination, htmlBasename),
    response.html.join("\n")
  );
};

void main();

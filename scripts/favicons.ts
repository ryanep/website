import fs from "node:fs/promises";
import path from "node:path";
import { favicons } from "favicons";

const source = "./docs/icon.svg";
const appRootPath = "./src/app";
const iconOutputPath = "./public/icons";

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
  const { files, images } = await favicons(source, configuration);

  await fs.mkdir(iconOutputPath, { recursive: true });

  const icoFile = images.find((image) => image.name === "favicon.ico");

  /**
   * Writes the main favicon .ico image file to the root of the app directory.
   */
  if (icoFile) {
    await fs.writeFile(
      path.join(appRootPath, icoFile.name),
      new Uint8Array(icoFile.contents)
    );
  }

  /**
   * Writes the favicon image files. These images are then written to the public
   * folder.
   */
  await Promise.all(
    images.map(async (image) => {
      await fs.writeFile(
        path.join(iconOutputPath, image.name),
        new Uint8Array(image.contents)
      );
    })
  );

  /**
   * Writes the favicon files. This only includes the manifest.webmanifest file.
   * This is then written to the root of the app folder.
   */
  await Promise.all(
    files.map(async (file) => {
      await fs.writeFile(path.join(appRootPath, file.name), file.contents);
    })
  );
};

void main();

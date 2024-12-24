import { promises as fs } from "fs";
import path from "path";
import postcss from "postcss";
import tailwindcss from "tailwindcss";

export const buildCSS = async (req, res) => {
  try {
    // Read the CSS file
    const cssFilePath = path.resolve("sample/style.css");
    const css = await fs.readFile(cssFilePath, "utf-8");

    // Path to the Tailwind configuration file
    const tailwindConfigPath = path.resolve("sample/tailwind.config.js");

    // Process the CSS with PostCSS
    const result = await postcss([
      tailwindcss({ config: tailwindConfigPath }), // Specify the Tailwind config
    ]).process(css, { from: cssFilePath, to: "output.css" });

    // Save the output CSS
    // await fs.writeFile("output.css", result.css);
    console.log("Done ✔︎");
    res.set("Content-Type", "text/css"); // Set the content type to CSS
    res.status(200).send(result.css);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error building CSS");
  }
};

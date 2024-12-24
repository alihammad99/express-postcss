# Dynamic PostCSS Runner

## Overview

This project is designed to help developers run PostCSS with various plugins dynamically. It provides a simple API to build CSS on-the-fly using popular PostCSS plugins like Tailwind CSS and DaisyUI. The server serves static files and allows users to build CSS through HTTP requests.

Using Tailwind CSS without a framework can be challenging, as it requires a build process to generate the necessary styles. While you can use Tailwind via a CDN, this approach limits customization and flexibility. This tiny server setup allows for a more customizable and efficient way to integrate Tailwind CSS and DaisyUI, enabling developers to leverage utility-first styling and component-based design seamlessly.

## Features

- **Dynamic CSS Building**: Build CSS files dynamically using PostCSS with various plugins.
- **Support for Tailwind CSS**: Integrate Tailwind CSS for utility-first styling.
- **DaisyUI Integration**: Utilize DaisyUI for pre-designed components that enhance the Tailwind experience.
- **UnoCSS Integration**: Use UnoCSS for on-demand utility generation.
- **Express Server**: A lightweight Express server to handle requests and serve static files.

## Starting Steps

1. Clone the git repo.
2. Run `npm install` or `bun install`.
3. Run `npm start` or `bun start`.
4. Open [http://localhost:1212/build-css](http://localhost:1212/build-css) to build requested files.

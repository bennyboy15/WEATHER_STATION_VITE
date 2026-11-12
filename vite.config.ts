import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        VitePWA({
            registerType: "autoUpdate",
            injectRegister: "auto",
            includeAssets: ["favicon.ico", "favicon.svg", "apple-touch-icon-180x180.png"],
            manifest: {
                name: "Weather Station",
                short_name: "Weather",
                description: "Live readings from my weather station",
                theme_color: "#eef5ff",
                background_color: "#eef5ff",
                display: "standalone",
                start_url: "/",
                scope: "/",
                icons: [
                    { src: "pwa-64x64.png", sizes: "64x64", type: "image/png" },
                    { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
                    { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
                    { src: "maskable-icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
                ],
            },
            workbox: {
                // Cache the app shell; API calls always go to the network.
                globPatterns: ["**/*.{js,css,html,svg,png,ico,woff2}"],
                navigateFallback: "/index.html",
            },
        }),
    ],
    resolve: {
        alias: { "@": path.resolve(import.meta.dirname, "./src") },
    },
});

import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import MainNavigation from "./components/MainComponent";
import { AuthContextProvider } from "./context/AuthProvider";

import styles from "./styles/main.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <AuthContextProvider>
        <body>
          <header>
            <MainNavigation />
          </header>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </AuthContextProvider>
    </html>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

import {
  isRouteErrorResponse,
  Links,
  Link,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          David Leggett <span className="font-sans text-sm font-normal text-gray-500 dark:text-gray-400">Photo Services</span>
        </Link>
        <ul className="flex items-center gap-8">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors ${
                    isActive
                      ? "text-gray-900 dark:text-white font-medium"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-[#F5F4F1] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-2">
              David Leggett Photo Services
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Capturing your most important moments with artistry and care.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Navigation</h4>
            <ul className="space-y-1">
              <li><Link to="/" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</Link></li>
              <li><Link to="/gallery" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Contact</h4>
            <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
              <li>info@davidleggettphotos.com</li>
              <li>(555) 123-4567</li>
              <li>Nashville, TN</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} David Leggett Photo Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

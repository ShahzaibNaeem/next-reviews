import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "./global.css";
import { exo2, orbitron } from "./fonts";

export const metadata = {
  title: {
    default: "bakti Games",
    template: "%s | BaktiGames",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      <body className="flex flex-col min-h-screen px-4 py-2 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
        <header className="py-4">
          <NavBar />
        </header>
        <main className="py-3 grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

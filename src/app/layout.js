import "./globals.css";
import Navbar from "./components/Navbar";
import {Archivo_Black} from "next/font/google";
import Footer from "./components/Footer";

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

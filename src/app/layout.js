import "./globals.css";
import Navbar from "./components/Navbar";
import { Archivo_Black } from "next/font/google";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <ToastContainer position="top-right" autoClose={3000}
            theme="dark"
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover />
          <Footer />
      </body>
    </html>
  );
}

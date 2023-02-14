import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import { GlobalContextProvider } from "./Context/store";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <GlobalContextProvider>
          <Navbar />
          <div className="container mx-auto my-8 flex flex-col-reverse space-y-0 md:flex-row md:space-y-0  space-x-0 md:space-x-10">
            <SideBar />
            {children}
          </div>

          <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  );
}

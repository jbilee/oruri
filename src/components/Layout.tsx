import GlobalStyle from "@/styles/global-styles";
import Footer from "./Footer";
import Navbar from "./Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "오르리",
  description: "암장 찾기 사이트-오르리",
};

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

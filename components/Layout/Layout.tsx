import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "@/context/Provider";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Providers>{children}</Providers>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

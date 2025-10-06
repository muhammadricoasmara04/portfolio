import Certificate from "@/components/Certificate";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import React from "react";

const page = () => {
  return (
    <div>
      <main className="min-h-screen">
        <section className="w-full fixed">
          <Navbar/>
        </section>
        <section className="w-full">
          <Introduction/>
        </section>
        <section className="w-full">
          <Project/>
        </section>
        <section className="w-full">
          <Certificate/>
        </section>
         <section className="w-full">
          <Footer/>
        </section>
      </main>
    </div>
  );
};

export default page;

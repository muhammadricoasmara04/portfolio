import Certificate from "@/components/Certificate";
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
        <section className="w-full mt-16">
          <Introduction/>
        </section>
        <section className="w-full">
          <Project/>
        </section>
        <section className="w-full">
          <Certificate/>
        </section>
      </main>
    </div>
  );
};

export default page;

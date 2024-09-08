"use client";
import React from "react";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

function Homepage() {
  return (
    <div className="h-screen mb-2 container mx-auto px-4 sm:px-10 md:px-8 lg:px-16">
      <Navbar />
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center mt-20">
          <h1 className="font-Millik text-6xl text-primary text-center">
            Create your own{" "}
          </h1>
          <h1 className="font-Millik text-6xl text-secondary text-center">
            Inspirational Quotes
          </h1>
          <p className="my-3 text-center">
            Personalize motivational messages with your name, favorite colors,
            and themes.<br></br> Let Quotiva craft quotes that resonate with
            your unique style and story.
          </p>
          <div className="flex mt-4 gap-3">
            <Link href="/generate">
              <Button className="bg-primary border-0 hover:bg-primary rounded-full py-7 px-10 shadow-none">
                Generate Quote
              </Button>
            </Link>
            <Button className="bg-secondary border-0 hover:bg-secondary rounded-full py-7 px-10 shadow-none">
              Explore Quotes
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Homepage;

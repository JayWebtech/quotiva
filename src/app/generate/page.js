"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toPng } from "html-to-image";
import { LuLoader2 } from "react-icons/lu";

function page() {
  const colors = [
    "#ffffff",
    "#000000",
    "#e3d7ff",
    "#ffd449",
  ];
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [customColor, setCustomColor] = useState("");
  const [quote, setQuote] = useState("");
  const [name, setName] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("/img/sunset.jpg");
  const cardRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setCustomColor("");
  };

  const handleCustomColorChange = (e) => {
    const color = e.target.value;
    if (/^#[0-9A-F]{6}$/i.test(color) || color === "") {
      setCustomColor(color);
      if (color) {
        setSelectedColor(color);
      }
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadImage = () => {
    if (cardRef.current === null) {
      return;
    }
    setIsLoading(true);
    toPng(cardRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-quote.png";
        link.href = dataUrl;
        link.click();
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const resetImage = () => {
    setBackgroundImage("/img/sunset.jpg");
    setSelectedColor("#ffffff");
  };

  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10 ring-2 ring-gray-100 bg-white p-4 lg:p-10 rounded-xl">
        <div className="">
          <h2 className="text-xl font-Millik text-primary mb-3">
            Select Text Color
          </h2>

          <div className="flex flex-wrap gap-4 mb-4">
            {colors.map((color) => (
              <div
                key={color}
                className={`w-12 h-12 cursor-pointer rounded ${
                  selectedColor === color ? "ring-2 ring-secondary p-1" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
              ></div>
            ))}
            <div className="flex flex-col justify-center">
              <input
                type="color"
                className="p-0"
                placeholder="#RRGGBB"
                id="style1"
                value={customColor}
                onChange={handleCustomColorChange}
              />
              <span className="text-sm">Custom</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-base">Your Quote:</label>
              <Textarea
                className="w-full p-2"
                rows="4"
                placeholder="Enter your inspirational quote"
                value={quote}
                maxLength={340}
                onChange={(e) => setQuote(e.target.value)}
              ></Textarea>
            </div>

            <div>
              <label className="block text-base">Your Name:</label>
              <Input
                type="text"
                className="w-full p-2 rounded"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-base">
                Upload Custom Background Image:
              </label>
              <Input
                type="file"
                accept="image/*"
                className="w-full p-2 "
                onChange={handleImageUpload}
              />
              <span
                className="text-sm my-2 cursor-pointer text-primary"
                onClick={resetImage}
              >
                Reset to default
              </span>
            </div>

            <button
              className={`${isLoading ? 'bg-gray-400' : 'bg-primary'} text-white px-4 py-2 rounded transition flex items-center gap-2`}
              onClick={downloadImage}
              disabled={isLoading}
            >
              {isLoading && <LuLoader2 className="text-white animate-spin" />}
              Download as Image
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div
            ref={cardRef}
            className="bg-[url('/img/sunset.jpg')] quotecard w-full h-[20em] lg:h-[25em] p-4 lg:p-8 rounded-lg text-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div
              className={`h-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-opacity-10 border-gray-100 p-6 flex flex-col justify-center`}
            >
              <h3
                className={`text-sm lg:text-xl`}
                style={{ color: selectedColor }}
              >
                {quote || "Your Quote will appear here..."}
              </h3>
              <p
                className={`text-base lg:text-lg font-Millik mt-4`}
                style={{ color: selectedColor }}
              >
                {name ? `- ${name}` : "- Your Name"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default page;

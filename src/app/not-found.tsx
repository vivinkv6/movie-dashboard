"use client";

import { roboto } from "@/fonts/fonts";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

function NotFound() {
  const [randomQuote, setRandomQuote] = useState("");
  const imageUrl1 = "https://static.toiimg.com/photo/msid-102493790/102493790.jpg?93372";
  const imageUrl2='https://assetscdn1.paytm.com/images/cinema/Singam-05e92b00-9456-11ef-a253-33f238ee5f34.jpg';
  const imageUrl3='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00383474-klabltwbvz-portrait.jpg';

  const movieQuotes = [
    "Houston, we have a problem... This page doesn't exist!",
    "I'll be back... but this page won't!",
    "May the force be with you... because this page isn't!",
    "Toto, I've a feeling we're not on the right page anymore!",
    "You're gonna need a bigger link... this one's broken!"
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * movieQuotes.length);
    setRandomQuote(movieQuotes[randomIndex]);
  }, []);

  return (
    <div className="w-full h-[100dvh] flex flex-col justify-center items-center bg-gray-950 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full animate-slide">
          <Image
            src={imageUrl1}
            alt="Film pattern"
            width={1920}
            height={1080}
            className="object-cover opacity-30"
          />
        </div>
      </div>

      <div className="z-10 text-center px-4 relative">
        {/* Decorative film reel left */}
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
          <Image
            src={imageUrl2}
            alt="Film reel"
            width={200}
            height={200}
            className="animate-spin-slow rounded-full"
          />
        </div>

        {/* Decorative film reel right */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
          <Image
            src={imageUrl3}
            alt="Film reel"
            width={200}
            height={200}
            className="animate-spin-slow rounded-full"
          />
        </div>

        {/* 404 Text with film clapper */}
        <div className="relative inline-block mb-8">
          <Image
            src={imageUrl1}
            alt="Movie clapper"
            width={100}
            height={100}
            className="absolute -top-16 -left-8 opacity-50 rounded-lg"
          />
          <div className="text-8xl font-bold animate-bounce">
            4<span className="text-orange-500">0</span>4
          </div>
        </div>

        {/* Movie quote */}
        <p className={`${roboto.className} text-2xl mb-8 italic text-orange-500 relative`}>
          {randomQuote}
        </p>

        <p className="text-xl mb-8 opacity-80">
          Looks like this scene got cut from the final edit!
        </p>

        {/* Action button with film strip hover effect */}
        <Link href="/" className="inline-block group">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
            <span className="relative z-10">Back to Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </Link>
      </div>

      {/* Film strip decoration */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
        <Image
          src={imageUrl1}
          alt="Film strip"
          width={1920}
          height={200}
          className="w-full opacity-20 object-cover"
        />
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default NotFound;

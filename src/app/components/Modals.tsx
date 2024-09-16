"use client";
import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";
import { useState } from "react";
import close from '/public/close.svg'

const Modal = ({ videoId }: { videoId: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        onClick={() => setIsOpen(true)}
      >
        Play Trailer
      </button>

      {isOpen && (
        <div className="fixed  inset-0 flex items-center justify-center z-50 bg-opacity-90 bg-black">
              <Image src={close}  width={30} height={30} alt="Close" className="absolute top-10  max-sm:right-[0%] max-sm:top-6 right-[27%] cursor-pointer" onClick={()=>setIsOpen(false)}/>
              
              <YouTubeEmbed
                videoid={videoId}
                width={600}
                height={600}
                key={videoId}
              />
          
        </div>
      )}
    </>
  );
};

export default Modal;

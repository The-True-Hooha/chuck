import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description?: string;
  image?: any;
}

function ImageCard({ title, description, image }: CardProps) {
  return (
    <div className="relative bg-gray-900 h-full p-6 rounded-lg border border-gray-300 transition-transform duration-300 hover:shadow-lg">
      <div
        className="rounded-lg"
        style={{ width: "350px", height: "350px" }}
      >
        <Image
          src={image || "/placeholder.jpg"}
          alt="image"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "8px",
          }}
        />
      </div>
      <div className="absolute bottom-[-2px] left-[-2px] w-full px-1 h-[25%] rounded-b-lg overflow-hidden bg-gradient-to-b from-black via-gray-900 to-transparent"></div>
    </div>
  );
}

export default ImageCard;

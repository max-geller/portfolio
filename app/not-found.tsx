"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const giphyApi = "ccM5aywCTcuZ1vpuYDIzY53rDM6JCHnQ";

export default function NotFound() {
  const [randomGif, setRandomGif] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRandomGif() {
      try {
        const response = await axios.get(
          `https://api.giphy.com/v1/gifs/random?api_key=${giphyApi}&tag=confused&rating=g`
        );
        setRandomGif(response.data.data.image_url);
      } catch (error) {
        console.error("Error fetching random GIF:", error);
      }
    }
    fetchRandomGif();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center p-48">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-2xl">Sorry, that page does not exist.</p>
        {randomGif && <img src={randomGif} alt="Random Giphy GIF" height={20} width={20} />}
      </div>
    </>
  );
}

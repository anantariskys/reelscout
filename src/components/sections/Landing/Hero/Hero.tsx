"use client";

import { getNowPlayingMovie, getPopularMovie } from "@/api/services/movie";
import Button from "@/components/Button";
import { Movie } from "@/types/global";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const Hero = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getNowPlayingMovie();
      setPopularMovies(response.results);
    };
    fetchData();
  }, []);
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="w-full h-screen "
    >
      {popularMovies.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
            }}
            className="h-screen bg-cover bg-center flex items-center relative justify-start "
          >
            <div className="relative  z-10 container">
              <h3 className="text-4xl font-semibold">{item.original_title}</h3>
              <div className="flex items-center gap-2">
              </div>
              <p className="max-w-4xl mb-4">{item.overview}</p>
              <Link href={`/movie/${item.id}`}>
              <Button variant="tertiary">Watch Now</Button>
              </Link>
            </div>
            <div className="absolute h-full bottom-0  bg-gradient-to-t from-primary to-transparent w-full"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;

"use client";

import { getPopularMovie } from "@/api/services/movie";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
const Hero = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getPopularMovie();
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
            <div className="relative z-10 container">
              <h3 className="text-4xl font-semibold">{item.original_title}</h3>
              <p className="max-w-4xl">{item.overview}</p>
            </div>
            <div className="absolute h-full bottom-0  bg-gradient-to-t from-primary to-transparent w-full"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;

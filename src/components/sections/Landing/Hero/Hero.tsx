"use client"

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
  useEffect(()=>{
    const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://api.themoviedb.org/3/movie/popular",
            {
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTc0YjY4ZWM3MjBhYWU3ZjRmODNmYzc4MTExZDUzOCIsIm5iZiI6MTY4OTMzNjg1OS4zNCwic3ViIjoiNjRiMTNjMWIyY2RlOTgwMGFlY2E5ODk1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.HSpGpteNgP78oaY4oVDqB1QHY2wGHxOyA6b0PJi24Mk",
              },
            }
          );
          setPopularMovies(response.data.results);
        } catch (error) {
          alert(error);
        }
      };
      fetchData();
  },[])

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

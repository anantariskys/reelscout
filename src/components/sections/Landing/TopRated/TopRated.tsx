"use client";
import { getTopRatedMovie } from "@/api/services/movie";
import SectionLayout from "@/layouts/SectionLayout";
import { Movie } from "@/types/global";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const TopRated = () => {
  const [topRated, setTopRated] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchTopRated = async () => {
      const response = await getTopRatedMovie();
      setTopRated(response.results);
    };
    fetchTopRated();
  });
  return (
    <SectionLayout title="Top Rated">
      <Swiper slidesPerView={8} spaceBetween={16} >
        {topRated.map((movie) => (
          <SwiperSlide key={movie.id} >
            <Link href={`/movie/${movie.id}`}>
            <div  className="flex flex-col gap-1 relative">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                className="w-full  object-cover rounded-xl"
                />
              <p className="text-sm line-clamp-2">{movie.title}</p>
              <small>{movie.release_date.substring(0, 4)}</small>
              <p className="text-sm text-secondary">
                {movie.vote_average.toFixed(1)}
              </p>
            </div>
                </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionLayout>
  );
};

export default TopRated;

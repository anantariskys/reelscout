"use client";
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
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTc0YjY4ZWM3MjBhYWU3ZjRmODNmYzc4MTExZDUzOCIsIm5iZiI6MTY4OTMzNjg1OS4zNCwic3ViIjoiNjRiMTNjMWIyY2RlOTgwMGFlY2E5ODk1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.HSpGpteNgP78oaY4oVDqB1QHY2wGHxOyA6b0PJi24Mk",
            },
          }
        );
        console.log(response.data.results);
        setTopRated(response.data.results);
      } catch (error) {
        console.log(error);
      }
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

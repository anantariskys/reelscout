"use client";
import { getTopRatedSeries } from "@/api/services/tv";
import SectionLayout from "@/layouts/SectionLayout";
import { Movie, TVShow } from "@/types/global";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const TopRatedSeries = () => {
  const [topRated, setTopRated] = useState<TVShow[]>([]);
  useEffect(() => {
    const fetchTopRated = async () => {
      const response = await getTopRatedSeries();
      setTopRated(response.results);
    };
    fetchTopRated();
  });
  return (
    <SectionLayout title="Top Rated Tv Series">
      <Swiper slidesPerView={8} spaceBetween={16} >
        {topRated.map((movie) => (
          <SwiperSlide key={movie.id} >
            <Link href={`/tv/${movie.id}`}>
            <div  className="flex flex-col gap-1 relative">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.original_name}
                className="w-full aspect-[9/14]  object-cover rounded-xl"
                />
              <p className="text-sm line-clamp-2">{movie.original_name}</p>
              <small>{movie.first_air_date}</small>
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

export default TopRatedSeries;

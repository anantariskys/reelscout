"use client";
import { getMovieCategory } from "@/api/services/movie";
import CategoryCard from "@/components/sections/Landing/Category/CategoryCard";
import SectionLayout from "@/layouts/SectionLayout";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Genre {
  id: number;
  name: string;
}
const Category = () => {
  const [genres, setGenre] = useState<Genre[]>([]);
  useEffect(() => {
    const fetchGenres = async () => {
      const response = await getMovieCategory();
      setGenre(response.genres);
    };

    fetchGenres();
  }, []);
  return (
    <SectionLayout title="Genres">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={16}
        navigation
        pagination={{ clickable: true }}
      >
        {genres.map((genre) => (
          <SwiperSlide key={genre.id} className="">
            <CategoryCard id={genre.id} name={genre.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionLayout>
  );
};

export default Category;

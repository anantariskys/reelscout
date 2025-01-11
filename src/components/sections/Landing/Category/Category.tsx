"use client"
import CategoryCard from '@/components/sections/Landing/Category/CategoryCard'
import SectionLayout from '@/layouts/SectionLayout'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Genre {
    id: number;
    name: string;
  }
const Category = () => {
    const [genres, setGenre] = useState<Genre[]>([]);
    useEffect(() => {
      const fetchGenres = async () => {
        try {
          const response = await axios.get(
            "https://api.themoviedb.org/3/genre/movie/list",
            {
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTc0YjY4ZWM3MjBhYWU3ZjRmODNmYzc4MTExZDUzOCIsIm5iZiI6MTY4OTMzNjg1OS4zNCwic3ViIjoiNjRiMTNjMWIyY2RlOTgwMGFlY2E5ODk1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.HSpGpteNgP78oaY4oVDqB1QHY2wGHxOyA6b0PJi24Mk",
              },
            }
          );
  
          setGenre(response.data.genres);
        } catch (error) {
          alert(error);
        }
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
  )
}

export default Category

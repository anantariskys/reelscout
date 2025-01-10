"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
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
interface Genre {
  id: number;
  name: string;
}
export default function Home() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [genres, setGenre] = useState<Genre[]>([]);

  useEffect(() => {
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
    fetchData();
    fetchGenres();
  }, []);
  return (
    <div className="">
      <Swiper
         modules={[Autoplay]}
         autoplay={{
           delay: 5000, 
           disableOnInteraction: false, 
         }}
         loop={true}
      className="w-full h-screen ">
        <div className="w-full h-1/4 absolute bottom-0 z-20 bg-gradient-to-t from-primary to-transparent"></div>
        {popularMovies.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
              }}
              className="h-screen bg-cover bg-center flex items-center relative justify-start "
            >
              <div className="relative z-10 container">
                <h3 className="text-4xl font-semibold">
                  {item.original_title}
                </h3>
                <p className="max-w-4xl">{item.overview}</p>
              </div>
              <div className="absolute h-3/4 bottom-0  bg-gradient-to-t from-primary to-transparent w-full"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <section className="container">
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
              <div
                className="p-4 border rounded-md flex items-end justify-center aspect-video border-white"
                key={genre.id}
              >
                {genre.name}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

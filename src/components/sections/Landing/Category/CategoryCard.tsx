import axios from "axios";
import React, { FC, useEffect, useState } from "react";

interface Genre {
  id: number;
  name: string;
}
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
const CategoryCard: FC<Genre> = ({ id, name }) => {
  const [movies, setMovies] = useState<Movie>();
  useEffect(() => {
    const fetchBackdrop = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${id}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTc0YjY4ZWM3MjBhYWU3ZjRmODNmYzc4MTExZDUzOCIsIm5iZiI6MTY4OTMzNjg1OS4zNCwic3ViIjoiNjRiMTNjMWIyY2RlOTgwMGFlY2E5ODk1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.HSpGpteNgP78oaY4oVDqB1QHY2wGHxOyA6b0PJi24Mk",
            },
          }
        );
        setMovies(response.data.results[5]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBackdrop();
  }, [id, name]);
  return (
    <div
      className="p-4 relative rounded-md flex items-end justify-center aspect-video bg-cover bg-center "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`,
      }}
      key={id}
    >
      <div className="h-3/4 bottom-0 w-full absolute bg-gradient-to-t from-primary to-transparent"></div>
      <p className="relative z-10 font-semibold">
      {name}
      </p>
    </div>
  );
};

export default CategoryCard;

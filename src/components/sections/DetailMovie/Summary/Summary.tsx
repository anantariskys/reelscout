import { Video } from "@/types/global";
import axios from "axios";
import React, { FC, useEffect } from "react";

const Summary: FC<{ id: number }> = ({ id }) => {
  const [video, setVideo] = React.useState<Video>();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTc0YjY4ZWM3MjBhYWU3ZjRmODNmYzc4MTExZDUzOCIsIm5iZiI6MTY4OTMzNjg1OS4zNCwic3ViIjoiNjRiMTNjMWIyY2RlOTgwMGFlY2E5ODk1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.HSpGpteNgP78oaY4oVDqB1QHY2wGHxOyA6b0PJi24Mk",
            },
          }
        );
        console.log(response.data.results);
        setVideo(response.data.results[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideo();
  });
  return (
    <section className="container">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video?.key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default Summary;

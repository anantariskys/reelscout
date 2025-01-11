import { MovieDetail, Video } from "@/types/global";
import axios from "axios";
import React, { FC, useEffect } from "react";

const Summary: FC<{ id: number; detail: MovieDetail }> = ({ id, detail }) => {
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
    <section className="container flex gap-4">
      <iframe
        className="w-2/5 aspect-video"
        src={`https://www.youtube.com/embed/${video?.key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <main className="space-y-2">
        <div className="">
          <h4 className="text-2xl font-semibold">Release Date</h4>
          <p>{detail.release_date}</p>
        </div>
        <div className="">
          <h4 className="text-2xl font-semibold">Runtime</h4>
          <p>{detail.runtime} minute</p>
        </div>
        <div className="">
          <h4 className="text-2xl font-semibold">Production Company</h4>
          <div className="flex gap-2 flex-wrap items-center">
            {detail.production_companies.map((company) => (
              <p
                className="text-sm bg-white text-primary  p-2 rounded-lg"
                key={company.id}
              >
                {company.name}
              </p>
            ))}
          </div>
        </div>
        <div className="">
          <h4 className="text-2xl font-semibold">Budget</h4>
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(detail.budget)}
          </p>
        </div>
        <div className="">
          <h4 className="text-2xl font-semibold">Revenue</h4>
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(detail.revenue)}
          </p>
        </div>
      </main>
    </section>
  );
};

export default Summary;

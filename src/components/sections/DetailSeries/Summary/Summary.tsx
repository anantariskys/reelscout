import { MovieDetail, TVSeriesDetail, Video } from "@/types/global";
import axios from "axios";
import React, { FC, useEffect } from "react";

const Summary: FC<{ id: number; detail:TVSeriesDetail }> = ({ id, detail }) => {
  const [video, setVideo] = React.useState<Video>();

  
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
          <h4 className="text-2xl font-semibold">First & Last Air Date</h4>
          <p>{detail.first_air_date} until {detail.last_air_date}</p>
        </div>
        <div className="">
          <h4 className="text-2xl font-semibold">Created By</h4>
          <div className="flex gap-2 flex-wrap">
            {
              detail.created_by.map((creator) => (
                <p
                  className="text-sm bg-white text-primary  p-2 rounded-lg"
                  key={creator.id}
                >
                  {creator.name}
                </p>
              ))
            }
          </div>
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
       
      </main>
    </section>
  );
};

export default Summary;

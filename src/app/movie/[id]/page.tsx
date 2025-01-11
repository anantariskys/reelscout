"use client";
import Button from "@/components/Button";
import Header from "@/components/sections/DetailMovie/Header/Header";
import Summary from "@/components/sections/DetailMovie/Summary/Summary";
import { MovieDetail } from "@/types/global";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = React.useState<MovieDetail>();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTc0YjY4ZWM3MjBhYWU3ZjRmODNmYzc4MTExZDUzOCIsIm5iZiI6MTY4OTMzNjg1OS4zNCwic3ViIjoiNjRiMTNjMWIyY2RlOTgwMGFlY2E5ODk1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.HSpGpteNgP78oaY4oVDqB1QHY2wGHxOyA6b0PJi24Mk",
            },
          }
        );

        console.log(response.data);

        setDetail(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetail();
  }, [id]);

  return (
    <div>
      {detail ? (
        <>
          {" "}
          <Header detail={detail} /> <Summary id={detail.id} />{" "}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;

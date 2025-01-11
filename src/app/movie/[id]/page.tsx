"use client";
import { getMovieDetail } from "@/api/services/movie";
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
      const response = await getMovieDetail(Number(id));
      setDetail(response);
    };
    fetchDetail();
  }, [id]);

  return (
    <div>
      {detail ? (
        <>
          {" "}
          <Header detail={detail} /> <Summary detail={detail} id={detail.id} />{" "}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;

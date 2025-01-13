"use client";
import { getSeriesDetail } from "@/api/services/tv";
import Header from "@/components/sections/DetailSeries/Header/Header";
import Summary from "@/components/sections/DetailSeries/Summary/Summary";
import { TVSeriesDetail } from "@/types/global";

import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = React.useState<TVSeriesDetail>();

  useEffect(() => {
    const fetchDetail = async () => {
      const response = await getSeriesDetail(Number(id));
      setDetail(response);
      console.log(response);
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

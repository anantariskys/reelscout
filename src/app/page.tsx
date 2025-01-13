
import "swiper/css";

import Hero from "@/components/sections/Landing/Hero/Hero";
import Category from "@/components/sections/Landing/Category/Category";
import TopRated from "@/components/sections/Landing/TopRatedMovie/TopRated";
import UpcomingMovie from "@/components/sections/Landing/UpcomingMovie/UpcomingMovie";
import TopRatedSeries from "@/components/sections/Landing/TopRatedSeries/TopRatedSeries";


export default function Home() {

  return (
    <div className="space-y-4">
     <Hero/>
     <Category/>
     <TopRated/>
     <UpcomingMovie/>
     <TopRatedSeries/>

    
    </div>
  );
}

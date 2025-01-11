
import "swiper/css";

import Hero from "@/components/sections/Landing/Hero/Hero";
import Category from "@/components/sections/Landing/Category/Category";
import TopRated from "@/components/sections/Landing/TopRated/TopRated";


export default function Home() {

  return (
    <div className="space-y-4">
     <Hero/>
     <Category/>
     <TopRated/>

    
    </div>
  );
}

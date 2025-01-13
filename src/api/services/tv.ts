import core from "../core";

export const getPopularSeries = async () => {
    try {
        const response = await core.get(`tv/popular`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getTopRatedSeries = async () => {
    try {
        const response = await core.get(`tv/top_rated`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getAiringTodaySeries = async () => {
    try {
        const response = await core.get(`tv/airing_today`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getOnTheAirSeries = async ()=>{
    try {
        const response = await core.get(`tv/on_the_air`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getSeriesDetail = async (id:number)=>{
    try {
        const response = await core.get(`tv/${id}?language=en-US`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
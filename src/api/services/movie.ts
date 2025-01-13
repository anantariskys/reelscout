import core from "../core";

export const getPopularMovie = async () => {
    try {
        const response = await core.get(`movie/popular`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getTopRatedMovie = async () => {
    try {
        const response = await core.get(`movie/top_rated`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const getUpcomingMovie = async () => {
    try {
        const response = await core.get(`movie/upcoming`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const getNowPlayingMovie = async () => {
    try {
        const response = await core.get(`movie/now_playing`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getMovieCategory = async ()=>{
    try {
        const response = await core.get(`genre/movie/list`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getMovieDetail = async (id:number)=>{
    try {
        const response = await core.get(`movie/${id}?language=en-US`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  type Genre = {
    id: number;
    name: string;
  };
  
  type ProductionCompany = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  };
  
  type ProductionCountry = {
    iso_3166_1: string;
    name: string;
  };
  
  type SpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
  };
  
  export interface Video {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number; 
    type: string;
    official: boolean; 
    published_at: string;
    id: string;
  }
  export interface TVShow {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
  }
  
  export type MovieDetail = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: string | null;
    budget: number;
    genres: Genre[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };

  interface Genre {
    id: number;
    name: string;
  }
  
  interface Episode {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
  }
  
  interface Network {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }
  
  interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }
  
  interface ProductionCountry {
    iso_3166_1: string;
    name: string;
  }
  
  interface Season {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
  }
  
  interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
  }
  
  interface Creator {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
  }
  interface TVSeriesDetail {
    id: number;
    backdrop_path: string;
    created_by : Creator[];
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: Episode;
    next_episode_to_air: string;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    seasons: Season[];
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
  }
  
  
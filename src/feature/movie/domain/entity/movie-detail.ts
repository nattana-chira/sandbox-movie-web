import { Movie } from "./movie";

interface Genre {
  id: number
  name: string;
};

export interface Episode {
  id: number;
  number: number;
  title: string;
  duration: string;
  thumbnail: string;
  description: string;
};

export class MovieDetails extends Movie {
  constructor(
    id: string,
    title: string,
    overview: string,
    releaseDate: string,
    posterUrl: string,
    backdropUrl: string,
    voteAverage: number,

    public year: number,
    public totalSeasons: number,
    public audienceAge: string,
    public adultTags: string[],
    public casts: string[],
    public genres: Genre[],
    public emotions: string[],

    public imdbId: string,
    public originCountry: string[],
    public popularity: number,
    public status: string,
    public tagline: string,
    public voteCount: number,

    public episodes: Episode[],
  ) {
    super(id, title, overview, releaseDate, posterUrl, backdropUrl, voteAverage);
  }
};
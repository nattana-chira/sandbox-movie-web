export type MovieDetails = {
  year: number;
  totalSeasons: number;
  audienceAge: string; // Changed from 'age' to 'audienceAge'
  adultTags: string[]; // Changed from 'adult tags' to 'adultTags'
  casts: string[];
  genre: string[];
  emotions: string[];
};
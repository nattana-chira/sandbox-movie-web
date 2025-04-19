export class Movie {
  constructor(
    public id: string,
    public title: string,
    public overview: string,
    public releaseDate: string,
    public posterUrl: string,
    public backdropUrl: string,
    public voteAverage: number
  ) {}
}

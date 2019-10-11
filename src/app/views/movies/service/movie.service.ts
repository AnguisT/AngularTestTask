import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "../../../modules/service/htpp.service";

@Injectable()
export class MovieService {
  constructor(private httpService: HttpService) {}

  getMovies(page: number): Observable<any> {
    return this.httpService.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=136c0ede72f807901528d9d1af86e80f&" +
        "language=ru&page=" +
        page
    );
  }

  getMoviesByGenre(selectedGenre: string): Observable<any> {
    return this.httpService.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=136c0ede72f807901528d9d1af86e80f&" +
        "language=ru&page=1&with_genres=" +
        selectedGenre
    );
  }

  getGenres(): Observable<any> {
    return this.httpService.get(
      "https://api.themoviedb.org/3/genre/movie/list?" +
        "api_key=136c0ede72f807901528d9d1af86e80f&language=ru"
    );
  }
}

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "../../../modules/service/htpp.service";
import { Object } from "core-js";

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

  getMoviesByParams(params?: any): Observable<any> {
    const searchParams = Object.entries(params || {})
      .map(pair => pair.map(encodeURIComponent).join("="))
      .join("&");
    console.log(searchParams);
    return this.httpService.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=136c0ede72f807901528d9d1af86e80f&" +
        "language=ru" +
        (searchParams.length ? "&" + searchParams : "")
    );
  }

  getGenres(): Observable<any> {
    return this.httpService.get(
      "https://api.themoviedb.org/3/genre/movie/list?" +
        "api_key=136c0ede72f807901528d9d1af86e80f&language=ru"
    );
  }
}

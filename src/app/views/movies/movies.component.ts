import { Component } from "@angular/core";
import { HttpService } from "../../modules/service/htpp.service";
import { MovieService } from "./service/movie.service";

@Component({
  selector: "movies",
  templateUrl: "./tpl/index.html",
  styleUrls: ["./styles/index.scss"]
})
export class MoviesComponent {
  private listMovies: Array<any> = [];
  private listGenres: Array<any> = [];
  private page: number;
  private totalPages: number;
  private filterValues: any = { page: 1 };

  constructor(private http: HttpService, private movieService: MovieService) {
    this.getMovies();
    this.movieService.getGenres().subscribe(data => {
      let body = JSON.parse(data._body);
      this.listGenres = body.genres;
    });
  }

  changeFilter(filterValues: any) {
    this.filterValues = filterValues;
    console.log(this.filterValues);
    this.getMovies();
  }

  getMovies(page?: number) {
    if (page) this.filterValues.page = page;
    this.movieService.getMoviesByParams(this.filterValues).subscribe(data => {
      let body = JSON.parse(data._body);
      this.listMovies = body.results;
      this.page = body.page;
      this.totalPages = body.total_pages;
    });
  }

  previusPage() {
    this.getMovies(this.page - 1);
  }

  nextPage() {
    this.getMovies(this.page + 1);
  }
}

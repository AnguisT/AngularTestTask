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
  private selectedGenre: string = "-1";
  private page: number;
  private totalPages: number;
  private isSelectedGenre: boolean;
  private isInputYear: boolean;
  private filterValues: any = { page: 1 };
  private inputYear: number;

  constructor(private http: HttpService, private movieService: MovieService) {
    this.getMovies();
    this.movieService.getGenres().subscribe(data => {
      let body = JSON.parse(data._body);
      this.listGenres = body.genres;
    });
    this.inputYear = 2019;
  }

  cleanSelectGenre() {
    this.selectedGenre = "-1";
    this.selectGenre(this.selectedGenre);
  }

  cleanInputYear() {
    this.inputYear = 2019;
    this.isInputYear = false;
    delete this.filterValues.primary_release_year;
    this.getMovies();
  }

  allClean() {
    this.inputYear = 2019;
    this.isInputYear = false;
    delete this.filterValues.primary_release_year;

    this.selectedGenre = "-1";
    this.isSelectedGenre = false;
    delete this.filterValues.with_genres;

    this.getMovies();
  }

  selectGenre(selectedGenre: string) {
    this.page = 1;
    if (selectedGenre !== "-1") {
      this.isSelectedGenre = true;
      this.filterValues.with_genres = selectedGenre;
      this.getMovies();
    } else {
      this.isSelectedGenre = false;
      delete this.filterValues.with_genres;
      this.getMovies();
    }
  }

  getMovies(page?: number) {
    this.filterValues.page = page ? page : 1;
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

  changeYear(changeYear: any) {
    this.isInputYear = true;
    this.filterValues.primary_release_year = changeYear.target.value;
    this.getMovies();
  }
}

import { Component } from "@angular/core";
import { HttpService } from "../../modules/service/htpp.service";
import { MovieService } from "./service/movie.service";

@Component({
  selector: "movies",
  templateUrl: "./tpl/index.html",
  styleUrls: ["./styles/index.scss"]
})
export class MoviesComponent {
  private listMovies: any = [];
  private listGenres: any = [];
  private selectedGenre: string = "-1";
  private page: number;
  private totalPages: number;
  private isSelected: boolean;

  constructor(private http: HttpService, private movieService: MovieService) {
    this.getMovies();
    this.movieService.getGenres().subscribe(data => {
      let body = JSON.parse(data._body);
      this.listGenres = body.genres;
    });
  }

  getMovies(page: number = 1) {
    this.movieService.getMovies(page).subscribe(data => {
      let body = JSON.parse(data._body);
      this.listMovies = body.results;
      this.page = body.page;
      this.totalPages = body.total_pages;
    });
  }

  cleanSelectGenre() {
    this.selectedGenre = "-1";
    this.selectGenre(this.selectedGenre);
  }

  selectGenre(selectedGenre: string) {
    this.page = 1;
    if (selectedGenre !== "-1") {
      this.isSelected = true;
      this.movieService.getMoviesByGenre(selectedGenre).subscribe(data => {
        let body = JSON.parse(data._body);
        this.listMovies = body.results;
      });
    } else {
      this.isSelected = false;
      this.getMovies();
    }
  }

  previusPage() {
    this.getMovies(this.page - 1);
  }

  nextPage() {
    this.getMovies(this.page + 1);
  }
}

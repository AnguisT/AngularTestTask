import { Component } from "@angular/core";
import { HttpService } from "../../modules/service/htpp.service";

@Component({
  selector: "movies",
  templateUrl: "./tpl/index.html",
  styleUrls: ["./styles/index.scss"]
})
export class MoviesComponent {
  private listMovies: any;
  private listGenres: any = [];
  private selectedGenre: string = "-1";
  private page: number;
  private totalPages: number;

  constructor(private http: HttpService) {
    this.getMovies(1);
    this.getGenres();
  }

  getMovies(page: number) {
    let url: string = `https://api.themoviedb.org/3/discover/movie?api_key=136c0ede72f807901528d9d1af86e80f&language=ru&page=${page}`;
    this.http.get(url).subscribe((data: any) => {
      let body = JSON.parse(data._body);
      this.listMovies = body.results;
      this.page = body.page;
      this.totalPages = body.total_pages;
    });
  }

  getGenres() {
    let url: string =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=136c0ede72f807901528d9d1af86e80f&language=ru";
    this.http.get(url).subscribe((data: any) => {
      let body = JSON.parse(data._body);
      this.listGenres = body.genres;
    });
  }

  cleanSelectGenre() {
    this.selectedGenre = "-1";
    this.selectGenre(this.selectedGenre);
  }

  selectGenre(selectedGenre: string) {
    if (selectedGenre !== "-1") {
      let page = Math.round(Math.random() * 100 + 1);
      let url: string = `https://api.themoviedb.org/3/discover/movie?api_key=136c0ede72f807901528d9d1af86e80f&language=ru&page=${page}&with_genres=${this.selectedGenre}`;
      this.http.get(url).subscribe((data: any) => {
        console.log(data);
        let body = JSON.parse(data._body);
        this.listMovies = body.results;
      });
    } else {
      this.getMovies(1);
    }
  }

  previusPage() {
    this.getMovies(this.page - 1);
  }

  nextPage() {
    this.getMovies(this.page + 1);
  }
}

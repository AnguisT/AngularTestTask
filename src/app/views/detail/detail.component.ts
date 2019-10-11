import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "./../../modules/service/htpp.service";

@Component({
  selector: "detail",
  templateUrl: "./tpl/index.html",
  styleUrls: ["./styles/index.scss"]
})
export class DetailComponent {
  private detailData: any;
  private trailerData: any;
  private isDescription: boolean = true;
  private player: YT.Player;
  private videoID: string = "cyv3WE-5gZs";
  constructor(private router: ActivatedRoute, private http: HttpService) {
    this.router.params.subscribe(params => {
      this.getTrailes(params.id);
      this.getDetailMovie(params.id);
    });
  }

  getDetailMovie(id: number) {
    this.http
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=136c0ede72f807901528d9d1af86e80f&language=ru`
      )
      .subscribe((data: any) => {
        this.detailData = JSON.parse(data._body);
        console.log(this.detailData);
      });
  }

  getTrailes(id: number) {
    this.http
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=136c0ede72f807901528d9d1af86e80f&language=en`
      )
      .subscribe((data: any) => {
        let body = JSON.parse(data._body);
        this.trailerData = body.results;
        console.log(this.trailerData);
      });
  }

  savePlayer(even: any) {
    console.log(event);
  }

  onStateChange(event: any) {
    console.log(event);
  }
}

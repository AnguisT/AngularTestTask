import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DetailService } from "./service/detail.service";

@Component({
  selector: "detail",
  templateUrl: "./tpl/index.html",
  styleUrls: ["./styles/index.scss"]
})
export class DetailComponent {
  private detailData: any;
  private trailerData: any;
  private isDescription: boolean = true;
  constructor(
    private router: ActivatedRoute,
    private detailService: DetailService
  ) {
    this.router.params.subscribe(params => {
      this.detailService.getTrailes(params.id).subscribe(data => {
        let body = JSON.parse(data._body);
        this.trailerData = body.results;
        console.log(body.results);
      });
      this.detailService
        .getDataDetailMovie(params.id)
        .subscribe((data: any) => {
          this.detailData = JSON.parse(data._body);
        });
    });
  }
}

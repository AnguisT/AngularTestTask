import { Component, Input } from "@angular/core";

@Component({
  selector: "list-card",
  templateUrl: "./tpl/index.html",
  styleUrls: ["./styles/index.scss"]
})
export class ListCardComponent {
  @Input("movies") private listMovies: Array<any>;
  constructor() {}
}

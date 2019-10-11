import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "item",
  templateUrl: "./tpl/index.html",
  styleUrls: ["./styles/index.scss"]
})
export class ItemComponent {
  @Input("item") private item: any;
  constructor(private router: Router) {}

  goDetailMovie() {
    console.log(this.item.id);
    this.router.navigate(["detail", this.item.id]);
  }
}

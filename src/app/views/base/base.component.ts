import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-base",
  templateUrl: "./tpl/index.html",
  styleUrls: ["./styles/index.scss"],
  encapsulation: ViewEncapsulation.None
})
export class BaseComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate([""]);
  }
}

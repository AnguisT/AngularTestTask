import { Routes } from "@angular/router";
import { MoviesComponent } from "./views/movies/movies.component";
import { DetailComponent } from "./views/detail/detail.component";

export const ROUTES: Routes = [
  {
    path: "",
    component: MoviesComponent
  },
  {
    path: "detail/:id",
    component: DetailComponent
  }
];

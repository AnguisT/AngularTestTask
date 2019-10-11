import { Routes } from "@angular/router";
import { MoviesComponent } from "./views/movies/movies.component";
import { DetailComponent } from "./views/detail/detail.component";
import { NotFoundComponent } from "./views/error/notfound.component";

export const ROUTES: Routes = [
  {
    path: "",
    component: MoviesComponent
  },
  {
    path: "detail/:id",
    component: DetailComponent
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

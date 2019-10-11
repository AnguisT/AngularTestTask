import { NgModule } from "@angular/core";
import { MoviesComponent } from "./movies.component";
import { CommonModule } from "@angular/common";
import { ListCardModule } from "../../modules/controls/list-card";
import { FormsModule } from "@angular/forms";
import { MovieService } from "./service/movie.service";

@NgModule({
  declarations: [MoviesComponent],
  imports: [ListCardModule, CommonModule, FormsModule],
  providers: [MovieService],
  exports: [MoviesComponent]
})
export class MoviesModule {}

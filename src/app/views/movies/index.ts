import { NgModule } from "@angular/core";
import { MoviesComponent } from "./movies.component";
import { CommonModule } from "@angular/common";
import { ListCardModule } from "../../modules/controls/list-card";
import { FormsModule } from "@angular/forms";
import { MovieService } from "./service/movie.service";
import { FormModule } from "../../modules/controls/form";

@NgModule({
  declarations: [MoviesComponent],
  imports: [ListCardModule, CommonModule, FormsModule, FormModule],
  providers: [MovieService],
  exports: [MoviesComponent]
})
export class MoviesModule {}

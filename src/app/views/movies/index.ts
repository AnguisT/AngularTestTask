import { NgModule } from "@angular/core";
import { MoviesComponent } from "./movies.component";
import { CommonModule } from "@angular/common";
import { ListCardModule } from "../../modules/controls/list-card";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [MoviesComponent],
  imports: [ListCardModule, CommonModule, FormsModule],
  exports: [MoviesComponent]
})
export class MoviesModule {}

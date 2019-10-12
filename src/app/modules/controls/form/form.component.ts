import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "custom-form",
  templateUrl: "./tpl/index.html",
  styleUrls: ["./styles/index.scss"]
})
export class FormComponent {
  @Input("listGenre") listGenre: any;
  @Output("onFilterValue") onFilterValue = new EventEmitter();
  private selectedGenre: string = "-1";
  private isSelectedGenre: boolean;
  private isInputYear: boolean;
  private inputYear: number;
  private filterValues: any = { page: 1 };

  constructor() {
    this.inputYear = 2019;
  }

  cleanSelectGenre() {
    this.selectedGenre = "-1";
    this.selectGenre(this.selectedGenre);
  }

  selectGenre(selectedGenre: string) {
    this.filterValues.page = 1;
    if (selectedGenre !== "-1") {
      this.isSelectedGenre = true;
      this.filterValues.with_genres = selectedGenre;
      this.onFilterValue.emit(this.filterValues);
    } else {
      this.isSelectedGenre = false;
      delete this.filterValues.with_genres;
      this.onFilterValue.emit(this.filterValues);
    }
  }

  cleanInputYear() {
    this.inputYear = 2019;
    this.isInputYear = false;
    delete this.filterValues.primary_release_year;
    this.filterValues.page = 1;
    this.onFilterValue.emit(this.filterValues);
  }

  allClean() {
    this.inputYear = 2019;
    this.isInputYear = false;
    delete this.filterValues.primary_release_year;

    this.selectedGenre = "-1";
    this.isSelectedGenre = false;
    delete this.filterValues.with_genres;
    this.filterValues.page = 1;

    this.onFilterValue.emit(this.filterValues);
  }

  changeYear(changeYear: any) {
    this.isInputYear = true;
    this.filterValues.primary_release_year = changeYear.target.value;
    this.filterValues.page = 1;
    this.onFilterValue.emit(this.filterValues);
  }
}

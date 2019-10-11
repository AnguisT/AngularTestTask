import { NgModule } from "@angular/core";
import { DetailComponent } from "./detail.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";

@NgModule({
  declarations: [DetailComponent],
  imports: [BrowserModule, CommonModule, NgxYoutubePlayerModule.forRoot()],
  exports: [DetailComponent]
})
export class DetailModule {}

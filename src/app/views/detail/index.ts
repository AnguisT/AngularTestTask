import { NgModule } from "@angular/core";
import { DetailComponent } from "./detail.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";
import { DetailService } from "./service/detail.service";

@NgModule({
  declarations: [DetailComponent],
  imports: [BrowserModule, CommonModule, NgxYoutubePlayerModule.forRoot()],
  providers: [DetailService],
  exports: [DetailComponent]
})
export class DetailModule {}

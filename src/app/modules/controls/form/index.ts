import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { FormComponent } from "./form.component";

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, BrowserModule, FormsModule],
  exports: [FormComponent]
})
export class FormModule {}

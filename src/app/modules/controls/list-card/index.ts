import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListCardComponent } from "./list-card.components";
import { ItemComponent } from "./comps/item/item.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [ListCardComponent, ItemComponent],
  imports: [CommonModule, BrowserModule],
  exports: [ListCardComponent],
  entryComponents: [ItemComponent]
})
export class ListCardModule {}

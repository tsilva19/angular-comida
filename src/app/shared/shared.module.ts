import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations:[InputComponent, RadioComponent, RatingComponent],
  imports:[CommonModule, FormsModule, ReactiveFormsModule],
  exports:[
    InputComponent,
    RadioComponent,
    RatingComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule{}

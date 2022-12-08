import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCommonModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatChipsModule,
  MatDatepickerModule,
  MatSliderModule,
  MatSelectModule,
  MatGridListModule,
  MatCheckboxModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatCommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatSliderModule,
    MatSelectModule,
    MatSelectModule,
    MatCheckboxModule,
    MatGridListModule,
    MatTableModule
  ],
  exports: [
    MatToolbarModule,
    MatCommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatSliderModule,
    MatSelectModule,
    MatCheckboxModule,
    MatGridListModule,
    MatTableModule
  ],
})
export class MaterialModule {}

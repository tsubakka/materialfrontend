
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatRadioModule,
  
} from '@angular/material';


@NgModule({
    declarations: [

    ],
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSidenavModule,
        MatAutocompleteModule,
        MatToolbarModule,
        MatGridListModule,
        MatExpansionModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatCardModule,
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSidenavModule,
        MatAutocompleteModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatExpansionModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatCardModule,

    ],
})

export class MaterialModule { }


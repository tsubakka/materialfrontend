

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
    MatGridListModule
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
        MatGridListModule
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
        MatGridListModule
    ],
})

export class MaterialModule { }


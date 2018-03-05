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
        MatToolbarModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSidenavModule,
        MatAutocompleteModule,
        MatToolbarModule
    ],
})

export class MaterialModule { }


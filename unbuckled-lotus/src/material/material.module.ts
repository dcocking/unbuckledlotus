import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Form Controls
import { 
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule
} from '@angular/material';

// Navigation
import { 
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';

// Layout
import { 
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule
} from '@angular/material';

// Buttons & Indicators
import { 
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
} from '@angular/material';

// Popups & Modals
import { 
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule
} from '@angular/material';

// Data table
import {
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';

// Services
import {
    MatSnackBar,
    MatDialog
} from '@angular/material'

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatListModule,
        MatStepperModule,
        MatTabsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule
    ],

     exports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatListModule,
        MatStepperModule,
        MatTabsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule
     ],
     providers: [
         MatSnackBar,
         MatDialog
        ]
})

export class MaterialModule {}
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
// Angular Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';
// Form Controls
import { MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule } from '@angular/material';
// Navigation
import { MatMenuModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
// Layout
import { MatCardModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatListModule, MatStepperModule, MatTabsModule } from '@angular/material';
// Buttons & Indicators
import { MatButtonModule, MatButtonToggleModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';
// Popups & Modals
import { MatDialogModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';
// Data table
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
// Services
import { MatSnackBar, MatDialog } from '@angular/material';
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        NgModule({
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
    ], MaterialModule);
    return MaterialModule;
}());
export { MaterialModule };
//# sourceMappingURL=material.module.js.map
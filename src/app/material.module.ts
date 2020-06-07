import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card'; 
import { MatDividerModule } from '@angular/material/divider'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatSliderModule} from '@angular/material/slider'; 

@NgModule({
    imports : [
        CommonModule,
        MatTabsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatDividerModule,
        MatProgressBarModule,
        MatSliderModule
    ],
    exports:[
        MatTabsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatDividerModule,
        MatProgressBarModule,
        MatSliderModule
    ]
})

export class MaterialModule{}

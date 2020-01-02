import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule, 
  MatIconModule, 
  MatMenuModule,
  MatToolbarModule,
    MatCardModule,
} from '@angular/material';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [ 
        MatButtonModule, 
        MatIconModule, 
        MatMenuModule,
        MatCardModule,
        MatInputModule,
        MatToolbarModule,
      ],
      exports: [
        MatButtonModule, 
        MatIconModule, 
        MatMenuModule,
        MatCardModule,
        MatInputModule,
        MatToolbarModule,
      ]    
})

export class materialdemo{}
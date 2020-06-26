import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import{MatButtonToggleModule} from '@angular/material/button-toggle'
import { MatSidenavModule} from '@angular/material/sidenav';
import{ MatToolbarModule} from '@angular/material/toolbar';
import{MatListModule} from '@angular/material/list';
import{ MatMenuModule} from '@angular/material/menu';
import{MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';


const materialComponents = [MatButtonModule, MatButtonToggleModule, MatIconModule,
  MatToolbarModule, MatSidenavModule,MatGridListModule, MatListModule,MatMenuModule,MatSelectModule,MatFormFieldModule,MatInputModule,MatCardModule,MatRadioModule];
@NgModule({

  imports: [materialComponents],
  exports: [materialComponents],
})
export class MaterialModule { }
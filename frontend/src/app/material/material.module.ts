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



const materialComponents = [MatButtonModule, MatButtonToggleModule, MatIconModule,
  MatToolbarModule, MatSidenavModule,MatListModule,MatMenuModule,MatFormFieldModule,MatInputModule];
@NgModule({

  imports: [materialComponents],
  exports: [materialComponents],
})
export class MaterialModule { }
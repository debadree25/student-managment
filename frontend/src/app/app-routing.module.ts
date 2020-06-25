import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'list',component:ListComponent},
  {path:'newStudent',component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

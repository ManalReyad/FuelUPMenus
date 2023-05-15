import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuelUPMenusComponent } from './Components/fuel-upmenus/fuel-upmenus.component';

const routes: Routes = [
  {path:'menus',component:FuelUPMenusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

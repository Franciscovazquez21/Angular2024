import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IceAboutComponent } from './ice-about/ice-about.component';
import { IcesComponent } from './ices/ices.component';

const routes: Routes = [
  {//ruta por defecto
    path:'',
    redirectTo:'ices',
    pathMatch: 'full'
  },
  {
    path:'ices',
    component: IcesComponent
  },
  {
    path:'about',
    component: IceAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

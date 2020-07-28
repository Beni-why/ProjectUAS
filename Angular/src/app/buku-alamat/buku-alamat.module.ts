import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BukuAlamatComponent } from './buku-alamat.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectuasComponent } from './projectuas/projectuas.component';
import { MaterialDesign} from '../material/material';


const routes:Routes=[
  {
    path:'app',
    component:BukuAlamatComponent,
    children:[
      {
        path:'projectuas',
        component:ProjectuasComponent
      },
    ]
  },
  {
    path:'',
    redirectTo:'app/projectuas',
    pathMatch:'full'
  } 
]

@NgModule({
  declarations: [BukuAlamatComponent, ProjectuasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign
  ]
})
export class BukuAlamatModule { }

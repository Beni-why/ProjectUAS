import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { DaftarKaryawanComponent } from './daftar-karyawan/daftar-karyawan.component';
import { DetailKaryawanComponent } from './detail-karyawan/detail-karyawan.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDesign} from '../material/material';
const routes:Routes=[
  {
    path:'app',
    component:ManagerComponent,
    children:[
      {
        path:'daftar-karyawan',
        component:DaftarKaryawanComponent
      },
      {
        path:'detail-karyawan',
        component:DetailKaryawanComponent
      }     
    ]
  },
  {
    path:'',
    redirectTo:'app/daftar-karyawan',
    pathMatch:'full'
  }
]
@NgModule({
  declarations: [ManagerComponent, DaftarKaryawanComponent, DetailKaryawanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign
  ]
})
export class ManagerModule { }
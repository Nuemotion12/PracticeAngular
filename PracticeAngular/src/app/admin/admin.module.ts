import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {  Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component: AdminPageComponent,
    children: [
      {path: 'login', component: AdminLoginComponent}
    ]
  }
   // {path: '', component: AdminLoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminLoginComponent, AdminPageComponent]
})
export class AdminModule { }

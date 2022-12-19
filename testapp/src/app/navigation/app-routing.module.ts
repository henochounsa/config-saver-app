import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from '../layouts/default/default-layout.component';
import { FullLayoutComponent } from '../layouts/full/full-layout.component';

import { AuthComponent } from '../modules/auth/auth.component';
import { MainComponent } from '../modules/main/main.component';
import { ScanComponent } from '../modules/scan/scan.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [{ path: 'home', component: MainComponent }],
  },

  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: 'auth', component: AuthComponent },
      { path: 'scan', component: ScanComponent },
    ],
  },

  {
    path: 'home',
    loadChildren: () =>
      import('../modules/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'scan',
    loadChildren: () =>
      import('../modules/scan/scan.module').then((m) => m.ScanModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

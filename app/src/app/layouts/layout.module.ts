import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default/default-layout.component';
import { FullLayoutComponent } from './full/full-layout.component';
import { AppLayoutNavbarComponent } from './components/navbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
  exports: [FullLayoutComponent, DefaultLayoutComponent,AppLayoutNavbarComponent],
  declarations: [FullLayoutComponent, DefaultLayoutComponent,AppLayoutNavbarComponent],
})
export class LayoutModule {}

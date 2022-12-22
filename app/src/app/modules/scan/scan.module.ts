import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ScanRoutingModule } from './scan-routing.module';
import { ScanComponent } from './scan.component';

@NgModule({
  declarations: [ScanComponent],
  imports: [CommonModule, ScanRoutingModule, ZXingScannerModule,],
})
export class ScanModule {}

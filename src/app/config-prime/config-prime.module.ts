import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { BreadcrumbModule } from 'primeng/breadcrumb';
@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    MenubarModule,
    InputTextModule,
    AvatarModule,
    BreadcrumbModule,
  ],
})
export class ConfigPrimeModule {}

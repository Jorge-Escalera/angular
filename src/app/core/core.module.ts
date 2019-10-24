import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

import { MatButtonModule, MatIconModule } from '@angular/material';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, LogoComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    UserModule,
  ],
  exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent]
})
export class CoreModule { }

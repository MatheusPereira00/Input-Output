import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Page1Component } from './page1/page1.component';
import { ButtonComponent } from './button/button.component';
import { ButtonSecundaryComponent } from './button-secundary/button-secundary.component';
import { CardComponent } from './card/card.component';
import { TesteRouterComponent } from './teste-router/teste-router.component';
import { FilhoComponent } from './filho/filho.component';


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    ButtonComponent,
    ButtonSecundaryComponent,
    CardComponent,
    TesteRouterComponent,
    FilhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

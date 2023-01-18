import { ButtonComponent } from './button/button.component';
import { AppComponent } from './app.component';
import { ButtonSecundaryComponent } from './button-secundary/button-secundary.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteRouterComponent } from './teste-router/teste-router.component';
import { Page1Component } from './page1/page1.component';
import { CardComponent } from './card/card.component';
import { FilhoComponent } from './filho/filho.component';

const routes: Routes = [
  {path: '', component: Page1Component},
  {path: 'button', component: ButtonComponent},
  {path: 'button2', component: ButtonSecundaryComponent},
  //{path: 'card', component: CardComponent},
  {path: 'filho', component: FilhoComponent},
  {path: 'teste', component: TesteRouterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

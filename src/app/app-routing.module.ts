import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { FirstComponent } from './first/first.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesExaComponent } from './services-exa/services-exa.component';
import { ServicesHttpComponent } from './services-http/services-http.component';

const routes: Routes = [
    {path:'binding',component:FirstComponent},
    {path:'directive',component:DirectivesComponent},
    {path:'pipe',component:PipesComponent},
    {path:'service1',component:ServicesExaComponent},
    {path:'service2',component:ServicesHttpComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

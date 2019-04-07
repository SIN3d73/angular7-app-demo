import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicsComponent} from "./basics/basics.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'basics', component: BasicsComponent},
  // {path: 'components', component: ComponentsComponent},
  // {path: 'components/:id', component: ComponentsComponent},
  {path: '', redirectTo: 'basics', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

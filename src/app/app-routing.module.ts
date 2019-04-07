import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicsComponent} from './basics/basics.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UsersComponent} from './users/users.component';
import {UserDetailsComponent} from './user-details/user-details.component';

const routes: Routes = [
  {path: 'basics', component: BasicsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: '', redirectTo: 'basics', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BasicsComponent} from './basics/basics.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BasicsBindingComponent} from './basics-binding/basics-binding.component';
import {FormsModule} from '@angular/forms';
import {BasicsFunctionsComponent} from './basics-functions/basics-functions.component';
import {BsDatepickerModule} from 'ngx-bootstrap';
import {BasicsListsComponent} from './basics-lists/basics-lists.component';
import {FilterPipe} from './filter.pipe';
import {AppNavbarComponent} from './app-navbar/app-navbar.component';
import {UsersComponent} from './users/users.component';
import {InstantTableComponent} from './instant-table/instant-table.component';
import {HttpClientModule} from '@angular/common/http';
import {UserDetailsComponent} from './user-details/user-details.component';
import {FontAwesomeModule} from '@devoto13/angular-fontawesome';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    PageNotFoundComponent,
    BasicsBindingComponent,
    BasicsFunctionsComponent,
    BasicsListsComponent,
    FilterPipe,
    AppNavbarComponent,
    UsersComponent,
    InstantTableComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    library.add(fas, far);
  }
}

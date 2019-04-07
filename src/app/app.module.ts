import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BasicsComponent} from './basics/basics.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BasicsBindingComponent} from './basics-binding/basics-binding.component';
import {FormsModule} from '@angular/forms';
import {BasicsFunctionsComponent} from './basics-functions/basics-functions.component';
import {BsDatepickerModule} from "ngx-bootstrap";
import {BasicsListsComponent} from './basics-lists/basics-lists.component';
import {FilterPipe} from './filter.pipe';
import {AppNavbarComponent} from './app-navbar/app-navbar.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

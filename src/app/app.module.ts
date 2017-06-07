import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { CoreModule } from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
import { ContactModule } from "app/contact/contact.module";

@NgModule({
  imports: [
    ContactModule,
    BrowserModule,
    CoreModule.forRoot({ userName: 'Miss Marple' }),
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

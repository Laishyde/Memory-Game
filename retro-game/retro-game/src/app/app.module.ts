import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './module/landing-page/views/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
    
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

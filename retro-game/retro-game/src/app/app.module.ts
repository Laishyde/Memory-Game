import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './module/landing-page/landing-page/landing-page.component';
import { ModuleTsComponent } from './molule/module.ts/module.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ModuleTsComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

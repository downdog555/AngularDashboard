import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavTopComponent } from './NavTop/NavTop.component';
import { NavLeftComponent } from './NavLeft/NavLeft.component';
import { MainComponent } from './Main/Main.component';

@NgModule({
   declarations: [
      AppComponent,
      NavTopComponent,
      NavLeftComponent,
      MainComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

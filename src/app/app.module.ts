import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { GaganaComponent } from './gagana/gagana.component';
import { GagimModule } from './gagim/gagim.module';
import { MypipePipe } from './mypipe.pipe';
import { GaganaaComponent } from './gaganaa/gaganaa.component';
import { GaganawildComponent } from './gaganawild/gaganawild.component';
import { ChildroutComponent } from './childrout/childrout.component';



@NgModule({
  declarations: [
    AppComponent,
     GaganaComponent,
     MypipePipe,
     GaganaaComponent,
     GaganawildComponent,
     ChildroutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GagimModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("i am gagana")
  }
}

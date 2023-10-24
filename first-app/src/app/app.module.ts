import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirettiveStrutturaliComponent } from './direttive-strutturali/direttive-strutturali.component';
import { ParentComponent } from './parent-child-comunication/parent/parent.component';
import { InChildComponent } from './parent-child-comunication/in-child/in-child.component';
import { OutChildComponent } from './parent-child-comunication/out-child/out-child.component';
import { RipassoComponent } from './ripasso/ripasso.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirettiveStrutturaliComponent,
    ParentComponent,
    InChildComponent,
    OutChildComponent,
    RipassoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

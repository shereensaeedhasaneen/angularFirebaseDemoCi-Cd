import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ConcatRxjsComponent } from './components/rxjs/concat-rxjs/concat-rxjs.component';
import { ForkJoinRxjsComponent } from './components/rxjs/fork-join-rxjs/fork-join-rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ConcatRxjsComponent,
    ForkJoinRxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

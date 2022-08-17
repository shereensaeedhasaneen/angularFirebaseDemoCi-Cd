import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
/*import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormlyFormTestComponent } from './formly-form-test/formly-form-test.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ConcatRxjsComponent } from './components/rxjs/concat-rxjs/concat-rxjs.component';
import { ForkJoinRxjsComponent } from './components/rxjs/fork-join-rxjs/fork-join-rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    //FormlyFormTestComponent
    ParentComponent,
    ChildComponent,
    ConcatRxjsComponent,
    ForkJoinRxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot(),*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

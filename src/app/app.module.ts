import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { CKEditorModule, CKEditorComponent } from 'ng2-ckeditor';
import { SampleCkeditor } from './ckeditor.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleCkeditor
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

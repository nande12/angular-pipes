import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { SecuredomPipe } from './pipes/securedom.pipe';
import { PasswordviewPipe } from './pipes/passwordview.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
    SecuredomPipe,
    PasswordviewPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

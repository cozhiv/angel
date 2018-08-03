import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { GameComponent } from './game/game.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
//import { HomeComponent } from './home/home.component';
//import { HomeService } from './home/home.service';
import { HomeModule } from './home/home.module';
import {AppRoutesModule} from './app.routes.module';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    GameComponent,
    SubscribeComponent//,
   // HomeComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    FormsModule,
    AppRoutesModule//,
   // HttpClientModule
  ],
  //providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

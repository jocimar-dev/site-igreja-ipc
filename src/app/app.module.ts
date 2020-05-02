import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './site/menu/menu.component';
import { BannerComponent } from './site/banner/banner.component';
import { HomeComponent } from './site/home/home.component';
import { FooterComponent } from './site/footer/footer.component';
import { CorpoComponent } from './site/corpo/corpo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BannerComponent,
    HomeComponent,
    FooterComponent,
    CorpoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

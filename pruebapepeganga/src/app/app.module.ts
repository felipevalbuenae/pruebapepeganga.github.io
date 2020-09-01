import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { SectionReddotComponent } from './section-reddot/section-reddot.component';
import { SectionImagesComponent } from './section-images/section-images.component';
import { SectionFeaturesComponent } from './section-features/section-features.component';
import { SectionSecondFeaturesComponent } from './section-second-features/section-second-features.component';
import { SectionPlayComponent } from './section-play/section-play.component';
import { SectionTextScooterComponent } from './section-text-scooter/section-text-scooter.component';
import { PreloadComponent } from './preload/preload.component';
import { SectionBgScooterComponent } from './section-bg-scooter/section-bg-scooter.component';
import { SectionTextScooter2Component } from './section-text-scooter2/section-text-scooter2.component';
import { SectionTextComponent } from './section-text/section-text.component';
import { SectionImages2Component } from './section-images2/section-images2.component';
import { SectionText2Component } from './section-text2/section-text2.component';
import { SectionBgScooter2Component } from './section-bg-scooter2/section-bg-scooter2.component';
import { SectionCarrusellComponent } from './section-carrusell/section-carrusell.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LadingPageComponent } from './pages/lading-page/lading-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    SectionReddotComponent,
    SectionImagesComponent,
    SectionFeaturesComponent,
    SectionSecondFeaturesComponent,
    SectionPlayComponent,
    SectionTextScooterComponent,
    PreloadComponent,
    SectionBgScooterComponent,
    SectionTextScooter2Component,
    SectionTextComponent,
    SectionImages2Component,
    SectionText2Component,
    SectionBgScooter2Component,
    SectionCarrusellComponent,
    LadingPageComponent,
    UsersPageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

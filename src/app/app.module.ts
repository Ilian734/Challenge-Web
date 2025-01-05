import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes'; // Module de routage
import { AppComponent } from './app.component';
import { AccueilComponent } from './modules/accueil/accueil.component';
import { CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers :[ provideRouter(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Ajoutez ceci
  bootstrap: [AppComponent],
})
export class AppModule {}

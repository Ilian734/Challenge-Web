import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LayoutComponent } from './layout/layout.component';


export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent, // utiliser le layout comme composant principal
        children: [ 
          { path: '', component: HomeComponent }, // connexion route
          { path: 'inscription', component: InscriptionComponent }, // inscription route
        ]
      },
];
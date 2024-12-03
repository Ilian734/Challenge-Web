import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  email: string = '';
  password: string = '';

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    if (this.email && this.password) {
      console.log('Email:', this.email);
      console.log('Mot de passe:', this.password);
      // Vous pouvez ajouter une logique ici, comme une requête API pour la connexion
    } else {
      console.log('Veuillez remplir tous les champs');
    }
  }
}

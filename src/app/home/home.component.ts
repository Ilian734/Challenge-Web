import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone : true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [RouterModule]
})
export class HomeComponent {

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

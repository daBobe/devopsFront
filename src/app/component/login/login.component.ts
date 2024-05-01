import { Component } from '@angular/core';
import{Router} from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nom: string = '';
  mdp: string = '';



  constructor(private AuthService: AuthService, private router:Router) {}

  login(): void {
    console.log('Username:', this.nom);
    console.log('Password:', this.mdp);
    this.AuthService.login(this.nom, this.mdp)
      .subscribe(
        response => {
          // Handle successful login
          console.log('Login successful', response);
          localStorage.setItem('user', JSON.stringify(response));
          
          this.router.navigate(['/home'])
        },
        error => {
          // Handle login error
          console.error('Login failed', error);
        }
      );
  }
}

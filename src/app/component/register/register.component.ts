import { Component } from '@angular/core';
import{Router} from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = {
    nom: '',
    prenom: '',
    email: '',
    mdp:''
  };

  constructor(private authService: AuthService , private router:Router){}

  registerUser(): void {
    this.authService.register(this.user).subscribe(
      response => {
        console.log('User registered successfully:', response);
        // const toastrRef = this.toastr.success('Welcome to my app');
        
        // Subscribe to the onHidden event of the toastr instance
        
          // Navigate to the login page after the toastr message disappears
          this.router.navigate(['/login']);   
      },
      error => {
        console.error('Registration failed:', error);
        // Handle registration failure (show error message, etc.)
      }
    );
  }
}

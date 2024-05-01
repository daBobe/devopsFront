import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectBid';
  constructor(private router: Router , private auth:AuthService) {}

  logdin : boolean =false ; 
   user : string =""; 
  ngOnInit(): void {
    this.logdin = this.auth.isLoggedIn() ;  
    this.user =this.auth.getUserName();
  }
   islogged(): boolean {
    return this.logdin ; 
   }
   logout() {
    // Clear login information from local storage
   this.auth.logout();
    this.logdin=false
    // Optionally, redirect to a specific route (e.g., login page)
    this.router.navigate(['/login']);

    // Update isLoggedIn state
    
  }
}



import { Component ,OnInit} from '@angular/core';
import { AddItemService } from 'src/app/services/add-item.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-bid',
  templateUrl: './create-bid.component.html',
  styleUrls: ['./create-bid.component.css']
})
export class CreateBidComponent implements OnInit {
  userId: any;
  selectedFile!: File;
  annonces = {
    description: '',
    prixinit: null,
    datefinal: '',
    photo1:'',
    categorie: '',
    User_id: ""
  };
  ngOnInit(): void {
    // Call the getUseId() method to retrieve the user ID
    this.userId = this.AuthService.getUseId();
    this.annonces.User_id = this.userId;
    console.log(this.userId)
    console.log(this.selectedFile)
  }



  constructor(private AddItemService: AddItemService , private router:Router, private AuthService:AuthService){}
    
  add(): void {
    // console.log(this.annonces);
    if (this.annonces) {
    const formData = new FormData();
    formData.append('description', this.annonces.description.toString());
    formData.append('prixinit', this.annonces.prixinit ?? '');
    formData.append('datefinal', this.annonces.datefinal);

      formData.append('photo1', this.annonces.photo1);
    formData.append('categorie', this.annonces.categorie);
    formData.append('user_id', this.annonces.User_id);
    formData.forEach((value,key) => {
      console.log(key+" "+value)
    });
    console.log(this.annonces)
  } else {
    console.error('annonces object not yet loaded');
    // Handle the case where annonces is not available
  }
 
    this.AddItemService.register(this.annonces).subscribe(
      response => {
        console.log('added success :', response);
        this.router.navigate(['/dash/myBids']);   
      },
      error => {
        console.error('Registration failed:', error);
      }
    );
  }

  onFileSelected(event:any): void {
    this.selectedFile = event.target.files[0];
  }
}

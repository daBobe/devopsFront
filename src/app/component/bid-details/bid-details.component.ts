import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddItemService } from 'src/app/services/add-item.service';
import { AuthService } from 'src/app/services/auth.service';
import { EncherService } from 'src/app/services/encher.service';
@Component({
  selector: 'app-bid-details',
  templateUrl: './bid-details.component.html',
  styleUrls: ['./bid-details.component.css']
})
export class BidDetailsComponent implements OnInit {
  itemId!: string;
  auctionItem: any;
  nbBids!:null;
  userid!:null;
  prix!:number;
  incrim!:number;
  datefina!:Date;
  remainingDays!: number;
  remainingHours!: number;
  remainingMinutes!: number;
  remainingSeconds!: number;
  constructor(private route: ActivatedRoute,private item :AddItemService,private bid:EncherService,private auth:AuthService){}
  
  ngOnInit(): void {
     console.log("this is prix here:",this.prix)
    // Retrieve the item ID from route parameters
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
    this.bid.getNumberOfEnchersByAnnonceId(id).subscribe(
      (data)=>{
        this.nbBids=data.
        numberOfEnchers
        console.log('mb bids ;',this.nbBids)
      })
    }
    if (id) {
      this.itemId = id;
      console.log(this.itemId);
      this.item.getAnnonceById(id).subscribe(
        (data) => {
          this.auctionItem = data; // Assign the fetched announcement details to the variable
          this.prix =data.prixactuelle;
          this.incrim =data.prixinit;
          this.datefina =data.datefinal;
          console.log('current item : ',this.auctionItem)
        },
        (error) => {
          console.error('Error fetching announcement details:', error);
        })
    } else {
      // Handle the case where id is null or undefined
      console.error('Item ID not provided');
      // You can redirect the user to another page or display an error message
    }
    
    const userid = this.auth.getUseId();
    // Call `updateRemainingTime()` to initialize the time values
    this.updateRemainingTime();

    // Set an interval to update the remaining time every second
    setInterval(() => {
        this.updateRemainingTime();
    }, 1000);
    
  }

  updateRemainingTime(): void {
    const currentTime = new Date().getTime(); // Get current time in milliseconds
    const endDate = new Date(this.datefina).getTime(); // Convert end date to milliseconds
    const remainingTime = endDate - currentTime; // Calculate remaining time in milliseconds
    
    // Convert remaining time to days, hours, minutes, and seconds
    this.remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    this.remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    this.remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  }
  

  up(): void {
    // Increase prix by 10%
    this.prix =this.prix+this.incrim*0.1;
   
  }
  save(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const userid = this.auth.getUseId();
     // Assuming you have a method to get user ID in your AuthService
    const encherData = {
      idannonce: id,
      idutilisateur: userid,
      prix: this.prix
    };

    // Call the createEncher method from EncherService to save the encher
    this.bid.createEncher(encherData).subscribe(
      (response) => {
        console.log('Encher saved successfully:', response);
        // Handle success, maybe navigate to a different page or show a success message
      },
      (error) => {
        console.error('Error saving encher:', error);
        // Handle error, maybe show an error message to the user
      }
    );
    setTimeout(() => {
      // Refresh the page
      window.location.reload();
    }, 1000);
  }
  }
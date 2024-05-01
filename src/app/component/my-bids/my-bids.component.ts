import { Component, OnInit } from '@angular/core';
import { AddItemService } from 'src/app/services/add-item.service';
import { AuthService } from 'src/app/services/auth.service';
import { EncherService } from 'src/app/services/encher.service';
@Component({
  selector: 'app-my-bids',
  templateUrl: './my-bids.component.html',
  styleUrls: ['./my-bids.component.css'],
})
export class MyBidsComponent implements OnInit {
  userId: any;
  id!: null;
  auctionItemsByid: any[] = [];
  constructor(
    private add: AddItemService,
    private AuthService: AuthService,
    private bid: EncherService
  ) {}
  ngOnInit(): void {
    this.userId = this.AuthService.getUseId();
    console.log(this.userId);
    this.getbidsByuserId();
    this.updateRemainingTime();
    this.fetchBidCounts();

    //get number of bids

    // Set an interval to update remaining time every second
    setInterval(() => {
      this.updateRemainingTime();
    }, 1000);
  }

  getbidsByuserId(): void {
    this.add.getAnnoncesByuserId(this.userId).subscribe(
      (response) => {
        console.log('list of bids :', response);
        this.auctionItemsByid = response;
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }

  fetchBidCounts() {
    this.auctionItemsByid.forEach((item) => {
        this.bid.getNumberOfEnchersByAnnonceId(item._id).subscribe((data) => {
            const nbBids = data.numberOfEnchers;
            item.nbbids = nbBids;
            console.log('Number of bids:', nbBids);
        });
    });
}
  updateRemainingTime() {
    const currentTime = new Date().getTime(); // Get current time in milliseconds
    this.auctionItemsByid.forEach((item) => {
      const endDate = new Date(item.datefinal).getTime(); // Convert end date to milliseconds
      
      const remainingTime = endDate - currentTime; // Calculate remaining time in milliseconds

      // Convert remaining time to days, hours, minutes, and seconds
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      // Update the remaining time properties of the item

      item.remaining = endDate;
      item.remainingDays = days;
      item.remainingHours = hours;
      item.remainingMinutes = minutes;
      item.remainingSeconds = seconds;
    });
  }
}

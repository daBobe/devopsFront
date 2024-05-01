import { Component, OnInit } from '@angular/core';
import { AddItemService } from 'src/app/services/add-item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-bids',
  templateUrl: './all-bids.component.html',
  styleUrls: ['./all-bids.component.css']
})
export class AllBidsComponent implements OnInit {
  auctionItems: any[] = [];

  constructor(private item: AddItemService, private router: Router) {}

  ngOnInit(): void {
    this.getAllBids();
    this.updateRemainingTime();
    
     // Set an interval to update remaining time every second
     setInterval(() => {
       this.updateRemainingTime();
     }, 1000);


  }

  // Function to fetch all bids
  getAllBids(): void {
    this.item.getbids().subscribe(
      response => {
        this.auctionItems = response;
      },
      error => {
        console.error('Error fetching bids:', error);
      }
    );
  }

  // Function to filter by category
  filterByCategory(event: Event, category: string): void {
    // Prevent default link behavior
    event.preventDefault();

    // Fetch filtered data based on category
    this.item.getAnnoncesByCategorie(category).subscribe(
      response => {
        // Update the auctionItems array with the filtered results
        this.auctionItems = response;
      },
      error => {
        console.error('Error filtering by category:', error);
      }
    );
  }
  filterByKeyword(event: Event, keyword: string): void {
    event.preventDefault(); // Prevent default form submission behavior

    this.item.searchAnnoncesByKeyword(keyword).subscribe(
        response => {
            this.auctionItems = response; // Update the auctionItems array with filtered results
        },
        error => {
            console.error('Error filtering by keyword:', error);
        }
    );
}

updateRemainingTime() {
  const currentTime = new Date().getTime(); // Get current time in milliseconds
  this.auctionItems.forEach(item => {
    const endDate = new Date(item.datefinal).getTime(); // Convert end date to milliseconds
    const remainingTime = endDate - currentTime; // Calculate remaining time in milliseconds
    
    // Convert remaining time to days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    
    // Update the remaining time properties of the item
    item.remainingDays = days;
    item.remainingHours = hours;
    item.remainingMinutes = minutes;
    item.remainingSeconds = seconds;
  });
}
}
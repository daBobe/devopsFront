import { AfterViewInit,Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { AddItemService } from 'src/app/services/add-item.service';
import { Router,RouterModule} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  auctionItems: any[] = [];
  OldauctionItems: any[] = [];
  ngOnInit(): void {
     this.getAllBids() 
    this.getOldBids()
     this.updateRemainingTime();
    
     // Set an interval to update remaining time every second
     setInterval(() => {
       this.updateRemainingTime();
     }, 1000);
  }

    constructor(private item: AddItemService, private router : Router){}
  ngAfterViewInit(): void {
    const categorySwiper = new Swiper(".categorySwiper", {
      spaceBetween: 32,
      autoplay: {
        delay: 1000,
      },
      breakpoints: {
        450: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
        1400: { slidesPerView: 6 },
      },
    
    });

    const bannerSwiper = new Swiper('.banner-slider', {
      effect: "cards",
      grabCursor: true,
      slidesPerView: 1,
      autoplay: {
        delay: 2000,
      },
    });
  }



    getAllBids():void {

      this.item.getbids().subscribe(
        response => {
          console.log('items list :', response);
        this.auctionItems=response 
        },
        error => {
          console.error('Registration failed:', error);
        }
      );
    }
    getOldBids():void {

      this.item.getoldbids().subscribe(
        response => {
          console.log('items list :', response);
        this.OldauctionItems=response 
        },
        error => {
          console.error('Registration failed:', error);
        }
      );
    }
    onViewAllBidsClick() {
      // Navigate to the allbids route
      this.router.navigate(['/allbids']).then(() => {
        // Get the vertical position of the center of the page
        const windowHeight = window.innerHeight;
        const verticalCenter = windowHeight / 2;
        
        // Scroll to the center of the page
        window.scrollTo(0, verticalCenter);
      });
    }
    bidDetails(itemId: string) {
      // Navigate to the allbids route
      this.router.navigate(['/details', itemId]).then(() => {
        // Get the vertical position of the center of the page
        const windowHeight = window.innerHeight;
        const verticalCenter = windowHeight / 2;
        
        // Scroll to the center of the page
        window.scrollTo(0, verticalCenter);
      });
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
    this.OldauctionItems.forEach(item => {
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

import { Component,OnInit } from '@angular/core';
import { CloudflareScriptService } from 'src/app/services/cloudflare-script.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-seller-dash',
  templateUrl: './seller-dash.component.html',
  styleUrls: ['./seller-dash.component.css']
})
export class SellerDashComponent implements OnInit {
  showMainContent: boolean = true;
  constructor(private cloudflareScriptService: CloudflareScriptService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cloudflareScriptService.loadScript();
     // Subscribe to route changes
     this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Check if the current route is 'create-bid'
      this.showMainContent = !this.router.url.includes('dash/create')&& !this.router.url.includes('dash/myBids');
    });
  }
}

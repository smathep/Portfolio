import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'photography',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NavbarComponent],
    templateUrl: './photography.component.html',
    styleUrls: ['./photography.component.scss']
    
  })
  export class PhotographyComponent {
    title = 'photography';

    imageFileNames: string[] = [
        "APC_0352-hdr.jpg",
        "IMG_1326.jpg",
        "IMG_1713.jpg",
        "IMG_2412.jpg",
        "IMG_3369.jpg",
        "IMG_5869.jpg",
        "IMG_0153.jpg",
        "IMG_1363.jpg",
        "IMG_2054.jpg",
        "IMG_2422.jpg",
        "IMG_3384.jpg",
        "IMG_5895.jpg",
        "IMG_1260-Pano.jpg",
        "IMG_1395-Pano.jpg",
        "IMG_2403.jpg",
        "IMG_2440.jpg",
        "IMG_4092.jpg",
        "IMG_8383.jpg",
        "IMG_1309.jpg",
        "IMG_1631-Pano.jpg",
        "IMG_2410.jpg",
        "IMG_3303.jpg",
        "IMG_5775-HDR.jpg",
        "_MG_3845-HDR.jpg"
    ]

    
    // imageFileNames: string[] = [];
    openWindow(image: any) {
        window.open(image);
    }
    // constructor() { }

    ngOnInit(): void {
        // this.http.get('/assets/images').subscribe((data: any) => {
        //     this.imageFileNames = data;
        // });
    }
  }
  
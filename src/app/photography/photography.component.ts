import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { HttpClient } from '@angular/common/http';
import { ImageGalleryComponent } from "../components/ImageGallery/ImageGallery.component";
import { PortfolioServiceService } from "../portfolio-service.service";

@Component({
    selector: 'photography',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NavbarComponent, ImageGalleryComponent],
    templateUrl: './photography.component.html',
    styleUrls: ['./photography.component.scss']
    
  })
  export class PhotographyComponent {
    title = 'photography';
    S3FolderPath = 'photography/mainPage';

    imageGallery: ImageGalleryComponent;

    constructor() {
        this.imageGallery = new ImageGalleryComponent();
    }

    ngOnInit(): void {}
  }
  
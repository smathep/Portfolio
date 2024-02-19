import { Component, Input, OnInit, inject } from "@angular/core";
import { Injectable } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { PortfolioServiceService } from "../../portfolio-service.service";

@Component({
    selector: 'imageGallery',
    standalone: true,
    imports: [CommonModule, HttpClientModule],
    templateUrl: './ImageGallery.component.html',
    styleUrls: ['./ImageGallery.component.scss'],
    providers: [PortfolioServiceService]
  })

export class ImageGalleryComponent implements OnInit{
    @Input() S3FolderPath!: string;
    ImageFileNames: any;
    ProxyBaseUrl: string = "";
    HighResbaseUrl: string = "";
    S3PhotographyFolderPath = "../../assets/photography"

    private service = inject(PortfolioServiceService);

    constructor() {}

    showImages(){
        
        //console.log(this.ImageFileNames);
    }

    getImageList(){
        this.service.getImageFileNames()
        .subscribe({
            next: (data) => {
                this.ImageFileNames = data;
            }
        }
        );
        return this.ImageFileNames;
        //console.log(this.ImageList);
    }

    openWindow(image: any) {
        window.open(`${this.HighResbaseUrl}/${image}`);
    }

    ngOnInit(): void {
        this.ImageFileNames = this.getImageList();
        this.ProxyBaseUrl = this.S3PhotographyFolderPath + this.S3FolderPath + '/proxies';
        this.HighResbaseUrl = this.S3PhotographyFolderPath + this.S3FolderPath + '/highRes';
    }

}
  
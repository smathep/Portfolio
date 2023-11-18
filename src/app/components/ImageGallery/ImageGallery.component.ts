import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
    selector: 'projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
    
  })
  export class ProjectsComponent {
    title = 'projects';
}

export class ImageGalleryComponent implements OnInit{
    ImagesPath: string;

    constructor() {
        this.ImagesPath = "assets/images/";
        
    }

    ngOnInit(): void {
        
    }

}
  
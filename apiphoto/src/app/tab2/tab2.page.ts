import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  photos: any;

  constructor(public photoService: PhotoService) { }
  
  async addPhotoToGallery() {
    
    this.photoService.addNewToGallery();
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });

   
  }
}

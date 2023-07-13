import { Component } from '@angular/core';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent {
  images: any[] = [
    { src: '../../../assets/img/tela.png' },
    { src: '../../../assets/img/tela.png' },
    { src: '../../../assets/img/tela.png' },
    { src: '../../../assets/img/tela.png' }
  ];
  selectedImage: number = 0;
  selectImage(imageIndex: number) {
    this.selectedImage = imageIndex;
    console.log('imageIndex-> ',imageIndex);
  }
}





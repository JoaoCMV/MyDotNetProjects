import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  currentSlideIndex = 0;
  images = [
    { url: 'https://media.istockphoto.com/id/1334436084/pt/foto/top-down-view-of-colorful-illuminated-gaming-accessories-laying-on-table.webp?s=2048x2048&w=is&k=20&c=a4ajQqBU2Mg0mqYEYOx8zk2t8W22DBACFHzNKY-xZNg='},
    { url: 'https://imageio.forbes.com/specials-images/imageserve/64aceb40d0ea591fa2edfb01/Two-Technology-Trends-Shaping-The-Future-Of-Gaming/960x0.jpg?height=398&width=711&fit=bounds'},
    { url: 'https://media.istockphoto.com/id/1424506370/vector/level-up-neon-game-controller-or-joystick-for-game-console-on-blue-background.jpg?s=170667a&w=0&k=20&c=-A6HK5ScxIKqxPuzU4U8Hf3DBqnjJ1s8d0BKDftss_k='},
    { url: 'https://assets-global.website-files.com/618d852d383de946ce0e3fa5/6495da7241185414c12ddc02_videoGamePlanet.PNG'},
    { url: 'https://media.istockphoto.com/id/1320799591/vector/game-on-neon-game-controller-or-joystick-for-game-console-on-blue-background.jpg?s=612x612&w=0&k=20&c=CbxRq6ctP5Ta1QLu18UMtvgJf4D-zFpTMm0Rz14_Gy0='}
  ];

  constructor() { }

  ngOnInit(): void {
    this.showSlides();
  }

  showSlides() {
    //let slideIndex = 0;
    const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLElement>;
    const interval = setInterval(() => {
      slides.forEach((slide) => {
        slide.style.display = 'none';
      });
      this.currentSlideIndex = (this.currentSlideIndex + 1) % slides.length;
      slides[this.currentSlideIndex].style.display = 'block';
      console.log(this.currentSlideIndex);
    }, 5000); // Change slide every 5 seconds
  }

  handleImageError(event: any) {
    event.target.src = 'https://static.thenounproject.com/png/504708-200.png';
  }

  prevSlide() {
    const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLElement>;

    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
    slides[this.currentSlideIndex].style.display = 'block';
    console.log(this.currentSlideIndex);
  }

  nextSlide() {
    const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLElement>;

    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
    slides[this.currentSlideIndex].style.display = 'block';
    console.log(this.currentSlideIndex);
  }

}

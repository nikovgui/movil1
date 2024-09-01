import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  images = [
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5WIlPGjzcBkDxV-3LOds3AqAbuetJK0FYQ&s' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ54905h5cm8AQQY-WcmKnFh30QR_ughuS5Q&s' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJARXBpAdqYpVKfaR457JJA5FaFV3bH91Hw&s' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6KseSXTmQX2ihqXxxqeHVEbCwUSMzgU7Tg&s' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-uojqayjLTtu8LXQthBIPw-NqfQvVrbHIg&s' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkFKXcWQqCrThBvMyB5rtbISh4meTR-pkvA&s' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHD-vhVrONfft4z0zvZDK0Qa2vllqzW6iXaw&s' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegktevFYioPdtkhB-xz9UJGZAoSmw6pm9rw&s' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbTdSZdpDBNsqGNJJyvYT7k-WNxASPUf4AQ&s' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR55JSzNDWkiLKfPqyx9gjy_GP5HT7QlWeHVA&s' },
    { src: 'https://i.pinimg.com/236x/94/64/8c/94648c95e7a3b69cf4169ed51ff6199d.jpg' },
    { src: 'https://i.pinimg.com/236x/89/81/d0/8981d0d0d27fb7688fddedb83aa37a4e.jpg' },
    { src: 'https://i.pinimg.com/236x/29/b9/e3/29b9e391220c97776969b9bdee247972.jpg' },
    { src: 'https://i.pinimg.com/474x/0e/6a/d2/0e6ad287274d5bfb45a49e52f9c9a064.jpg' },
    { src: 'https://i.pinimg.com/236x/61/a5/7d/61a57db2f03733262a2624033fa18101.jpg' },
    { src: 'https://i.pinimg.com/236x/37/df/05/37df0568f90e806e06e5feb432cd423b.jpg' },
    { src: 'https://i.pinimg.com/236x/43/ce/a1/43cea1ef9dd6459b0d28a15d9c50e246.jpg' },
    { src: 'https://i.pinimg.com/236x/1f/8d/27/1f8d2755f1748c3657187ecac042559b.jpg' },
    { src: 'https://i.pinimg.com/236x/09/d0/0f/09d00f2355d1f06ff242d92b05e1a89c.jpg' },
    { src: 'https://i.pinimg.com/474x/ea/74/5f/ea745f67de6f48b24fb79071756e4efe.jpg' },
    { src: 'https://i.pinimg.com/474x/b9/c6/34/b9c634b2af803f5f6bc009816a19daf8.jpg' },
    { src: 'https://i.pinimg.com/236x/51/4b/30/514b3077bb917a85d83c5d8b26962f35.jpg' },
    { src: 'https://i.pinimg.com/236x/86/9b/b5/869bb5bc0edfbdc730aa0820335610ee.jpg' },
    { src: 'https://i.pinimg.com/474x/7d/00/57/7d00577211e8f1a560e0b8ddb74708af.jpg' },
    { src: 'https://i.pinimg.com/236x/52/8a/5b/528a5b1b9f16f3d76852a66590dba6f8.jpg' },
    { src: 'https://i.pinimg.com/236x/45/19/ab/4519abc3896149237953d72a7830e780.jpg' },
    { src: 'https://i.pinimg.com/236x/10/6a/fc/106afc5e9806eac779d4665eae582f0c.jpg' },
    { src: 'https://i.pinimg.com/474x/07/f3/a4/07f3a4dcbaf6c8a896b8a56a967860da.jpg' },
    { src: 'https://i.pinimg.com/236x/a9/e1/17/a9e11782b54bd3c54a3aa06dc8741393.jpg' },
    { src: 'https://i.pinimg.com/236x/18/94/4c/18944c44f7561bf31dd08c513f3c7c83.jpg' },
    { src: 'https://i.pinimg.com/236x/d4/07/2c/d4072cdd21a7fd24f577407724fbc1c5.jpg' },
    { src: 'https://i.pinimg.com/236x/18/3e/2d/183e2d793c0e4d5089cdbfa979435019.jpg' },
    { src: 'https://i.pinimg.com/474x/69/49/b0/6949b0ba28883c38e1efd620f0526421.jpg' },
    { src: 'https://i.pinimg.com/236x/02/cb/a9/02cba982f0cf7f53e6626873e85e1072.jpg' },
    { src: 'https://i.pinimg.com/236x/fb/e0/7d/fbe07d578cab2758f1f1ce77349afcbc.jpg' },
    { src: 'https://i.pinimg.com/236x/22/94/45/229445701b9880dcc059c9be97011054.jpg' },
    { src: 'https://i.pinimg.com/236x/f9/04/ef/f904ef9a508b5d4b5efd0e7077b3cd34.jpg' },
    { src: 'https://i.pinimg.com/474x/7a/73/d3/7a73d325d351f49c3068996a46da0daa.jpg' },
    { src: 'https://i.pinimg.com/236x/8e/62/05/8e6205b3a5bdbb1e4d3f57dfe01abe76.jpg' },
    { src: 'https://i.pinimg.com/236x/dc/5d/53/dc5d53464df4d2b5e10b266e4256d032.jpg' },
    
    
  ];

  showButton(event: Event) {
    const target = event.currentTarget as HTMLElement;
    target.classList.toggle('active');
  }

  guardarImagen(){
    alert('Imagen Guardada');
  }

  descargarImagen(){
    alert('Descargar imagen')
  }

  masOpciones(){
    alert('Mas opciones');
  }


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta6',
  templateUrl: './pregunta6.component.html',
  styleUrls: ['./pregunta6.component.css']
})
export class Pregunta6Component implements OnInit {

      lb_feliz:string = "El asesor se preocupo por ayudarme";
      lb_triste:string = "El asesor se preocupo más por vender";

  constructor(private router: Router) { }

  seleccionar(){

    this.router.navigateByUrl('/pregunta7');

  }

  ngOnInit() {
  }

}

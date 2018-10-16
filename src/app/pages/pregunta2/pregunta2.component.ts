import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.css']
})
export class Pregunta2Component implements OnInit {

      lb_uno:string = "Extremadamente insatisfecho";
      lb_dos:string = "Insatisfecho";
      lb_tres:string = "Neutral";
      lb_cuatro:string = "Satisfecho";
      lb_cinco:string = "Extremadamente satisfecho";

  constructor(private router: Router) { }

  seleccionar(){

    this.router.navigateByUrl('/pregunta3');

  }

  ngOnInit() {
  }

}

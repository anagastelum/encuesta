import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pregunta4',
  templateUrl: './pregunta4.component.html',
  styleUrls: ['./pregunta4.component.css']
})
export class Pregunta4Component implements OnInit {

  lb_uno:string = "Extremadamente insatisfecho";
  lb_dos:string = "Insatisfecho";
  lb_tres:string = "Neutral";
  lb_cuatro:string = "Satisfecho";
  lb_cinco:string = "Extremadamente satisfecho";

  constructor( private router: Router ) { }

  seleccionar(){

    this.router.navigateByUrl('/pregunta5');

  }

  ngOnInit() {
  }

}

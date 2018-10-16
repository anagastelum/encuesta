import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta8',
  templateUrl: './pregunta8.component.html',
  styleUrls: ['./pregunta8.component.css']
})
export class Pregunta8Component implements OnInit {

  lb_uno:string = "Extremadamente insatisfecho";
  lb_dos:string = "Insatisfecho";
  lb_tres:string = "Neutral";
  lb_cuatro:string = "Satisfecho";
  lb_cinco:string = "Extremadamente satisfecho";



  constructor(private router: Router) { }

  seleccionar(){

    this.router.navigateByUrl('/pregunta9');
  }

  ngOnInit() {
  }

}

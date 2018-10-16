import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta10',
  templateUrl: './pregunta10.component.html',
  styleUrls: ['./pregunta10.component.css']
})
export class Pregunta10Component implements OnInit {

  lb_uno:string = "Extremadamente insatisfecho";
  lb_dos:string = "Insatisfecho";
  lb_tres:string = "Neutral";
  lb_cuatro:string = "Satisfecho";
  lb_cinco:string = "Extremadamente satisfecho";



  constructor(private router: Router) { }

  seleccionar(){

    this.router.navigateByUrl('/pregunta11');
  }

  ngOnInit() {
  }

}

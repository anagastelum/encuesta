import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta5',
  templateUrl: './pregunta5.component.html',
  styleUrls: ['./pregunta5.component.css']
})
export class Pregunta5Component implements OnInit {

    lb_si:string = "Si";
    lb_no:string = "No";

  constructor(private router: Router) { }

  seleccionar(){

    this.router.navigateByUrl('/pregunta6');

  }

  ngOnInit() {
  }

}

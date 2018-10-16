import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta7',
  templateUrl: './pregunta7.component.html',
  styleUrls: ['./pregunta7.component.css']
})
export class Pregunta7Component implements OnInit {

    lb_si:string = "Si";
    lb_no:string = "No";

  constructor(private router: Router) { }

seleccionar(){

  this.router.navigateByUrl('/pregunta8');
}


  ngOnInit() {
  }

}

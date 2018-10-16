import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pregunta11',
  templateUrl: './pregunta11.component.html',
  styleUrls: ['./pregunta11.component.css']
})
export class Pregunta11Component implements OnInit {

          lb_si:string = "Si";
          lb_no:string = "No";


  constructor(private router: Router) { }

seleccionar(){

  this.router.navigateByUrl('pregunta');
}

  ngOnInit() {
  }

}

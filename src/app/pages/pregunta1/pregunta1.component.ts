import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta1',
  templateUrl: './pregunta1.component.html',
  styleUrls: ['./pregunta1.component.css']
})
export class Pregunta1Component implements OnInit {

    lb_si = "Si";
    lb_no = "No";
    checked = false;



  constructor(private router: Router) { }

  seleccionar(){
    this.checked = true;
    this.router.navigateByUrl('/pregunta2');

  }





  ngOnInit() {
  }

}

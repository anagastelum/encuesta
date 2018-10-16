import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformacionService } from 'src/app/services/informacion.service';
import { FormularioInterface } from '../../interfaces/formulario.interface';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  lb_region:string = "Región";
  lb_asesor:string = "Nombre Asesor";
  lb_cliente:string = "Nombre Cliente";
  lb_correo:string = "Correo Electrónico";
  lb_aceptar:string = "Aceptar";
  lb_cancelar:string = "Cancelar";
  chihuahua:string = "Cd. Juárez";
  hermosillo:string = "Hermosillo";
  mexicali:string ="Mexicali";
  existo = true;

  constructor(private router: Router,
              public informacionService: InformacionService) { }

  comenzar(){

 this.existo = false;

              }
  guardar(){

    // Guardar en base de datos y pasar a la siguiente pagina
    this.router.navigateByUrl('/pregunta1');
  }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { InformacionService } from './services/informacion.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



    constructor(private router: Router ,
                private http: HttpClient ,
                public informacionService: InformacionService,
                private storage: AngularFireStorage ) { 
           

                }

  
    }




import { Component, OnInit } from '@angular/core';
import {XsegundoService, valorReloj} from '../xsegundo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  datos$: Observable<valorReloj>;
  hora: number;
  minutos: string;
  ampm: string;
  segundos: string;


  constructor(private segundo: XsegundoService) { }

  ngOnInit() {
    this.datos$=this.segundo.getInfoReloj();
    this.datos$.subscribe(x => {
      this.hora = x.hora;
      this.minutos = x.minutos;
      this.ampm = x.ampm;
      this.segundos = x.segundo
    });
  }

}


import { Component, OnInit } from '@angular/core';
import { GeolocalizacionService } from './geolocalizacion.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private title = 'Clima';
  private clima: any;
  loaded = false;
  cityInfo: any;
  
  climaNow;
  climaDay;

  constructor(private geolocalizacion: GeolocalizacionService){}
  
  ngOnInit(){
    this.geolocalizacion.getInfo().subscribe(
      data => {
          this.loaded = true;
          this.cityInfo = data.info;
          this.clima = data.clima;

          this.climaNow = this.clima.dataseries[0];
          this.climaDay = this.clima.dataseries.slice(1,7);         
      }, error => {
        alert('Ocurrio un Error');
        console.log(error)
      }
    );      
  }

  Fecha(fecha:any){
    let cadena = new String(fecha);
    return cadena.substr(6,2)+'/'+cadena.substr(4,2)+"/"+cadena.substr(0,4);
  };

  Imagen(tipo: any){
    let src="";
    if(tipo == 'clear'){
      src = "https://image.flaticon.com/icons/svg/979/979534.svg";
    }else if(tipo == 'lightrain' || tipo == 'rain'){
      src = "https://image.flaticon.com/icons/svg/2930/2930058.svg"
    }else if(tipo = 'tsrain'){
      src = "https://image.flaticon.com/icons/svg/616/616688.svg";
    }else if(tipo = 'ts'){
      src = "https://image.flaticon.com/icons/svg/622/622046.svg";
    }else if(tipo = 'snow'){
      src = "https://image.flaticon.com/icons/svg/2834/2834509.svg";
    }else if(tipo = 'mcloudy'){
      src = "https://image.flaticon.com/icons/svg/861/861059.svg";
    }else if(tipo = 'cloudy'){
      src = "https://image.flaticon.com/icons/svg/2892/2892820.svg";
    }

    return src;
  };
}

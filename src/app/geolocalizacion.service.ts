import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable, concat, of } from 'rxjs';
import {flatMap, map, mergeMap, concatMap, concatAll} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GeolocalizacionService {

  private llave = '7802f82c33e5935e7350b17446c8b8cd';
  private baseurl = 'http://api.ipstack.com/check'
  constructor(private http: HttpClient) { }
  
  getInfo(){
    const params = new HttpParams().set('access_key',this.llave);
    return this.http.get(this.baseurl,{
      params
    }).pipe(
        mergeMap(
          (info: any) => {
            
            console.log(info.ip),
            console.log(info.longitude),
            console.log(info.latitude)

            const params = {
              lon: info.longitude,
              lat: info.latitude,
              product: 'civillight',
              output: 'json'
            };
            return this.http.get('http://www.7timer.info/bin/api.pl',{params})
              .pipe(
                map(clima => ({clima, info}))
              );
          }
        )
      )
  }
}

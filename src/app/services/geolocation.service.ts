import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  positionObservable(): Observable<GeolocationCoordinates> {

    return new Observable(subscriber => {
      const { geolocation } = navigator;
      let watchId: number;

      if (geolocation) {
      watchId = geolocation.watchPosition((pos) => {
          subscriber.next(pos.coords);
        }, (error) => {
          subscriber.error(error);
        });
      }else{
        subscriber.error( new Error('Geolocation is not supported by this browser.'));
      }

      return () => {
        geolocation.clearWatch(watchId);
      }
    });
  }
}

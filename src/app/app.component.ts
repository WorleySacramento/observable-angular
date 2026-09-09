import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeolocationService } from './services/geolocation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'estudo-rxjs';

  coordenadas?: GeolocationCoordinates;
  inscricao?: Subscription;

  constructor(private geolocationService: GeolocationService) {}

  ngOnInit(): void {
   this.inscricao = this.geolocationService.positionObservable().subscribe({
      next: (coords) => {
        this.coordenadas = coords;
      },
      error: (error) => {
        alert('Erro ao obter a posição: ' + error.message);
      }
    })
  }

  ngOnDestroy(): void {
    this.inscricao?.unsubscribe();
  }


  mostrarRelogio: boolean = true;

  alternar(){
    this.mostrarRelogio = !this.mostrarRelogio;
  }
}

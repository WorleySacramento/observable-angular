import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tests-observable',
  templateUrl: './tests-observable.component.html',
  styleUrls: ['./tests-observable.component.css']
})
export class TestsObservableComponent {

  constructor() { 
    this.testObservable();
  }

  testObservable() {
    console.log('testObservable called');

    const obs: Observable<number> = new Observable<number>((subscriber) => {
     setTimeout(() => {
       subscriber.next(1);
      subscriber.next(3);
      subscriber.next(5);
      const numeroAleatorio = Math.floor(Math.random() * 100);
      if (numeroAleatorio % 2 === 0) {
        subscriber.error(new Error(`O número aleatório ${numeroAleatorio} é par. Erro lançado.`));
      }
      subscriber.next(numeroAleatorio);
      subscriber.complete();
    }, 2000);
      });

    obs.subscribe({
      next: (numero) =>{
        console.warn('Emitiu: ', numero);
      },
      complete: () => {
        console.warn('Observable completed');
      },
      error: (erro) => {
        console.error('Erro no Observable: ', erro.message);
      }
    });

    console.log('OLÁ');
  }

}

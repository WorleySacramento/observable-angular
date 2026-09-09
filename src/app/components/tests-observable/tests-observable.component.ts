import { Component } from '@angular/core';
import { filter, first, from, last, Observable, of } from 'rxjs';

@Component({
  selector: 'app-tests-observable',
  templateUrl: './tests-observable.component.html',
  styleUrls: ['./tests-observable.component.css']
})
export class TestsObservableComponent {

  constructor() {
    // this.testObservable();
    // this.testeOperadoresCreate();
    this.testoperadoresFilter();
  }

  testoperadoresFilter() {
    const obs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    obs.pipe(first()).subscribe({
      next: (numero) => {
        console.warn('First Emitiu: ', numero);
      }
    });

    obs.pipe(last()).subscribe({
      next: (numero) => {
        console.warn('Last Emitiu: ', numero);
      }
    });

    obs.pipe(filter((numero)=> numero < 8)).subscribe({
      next: (numero) => {
        console.warn('Filter Emitiu: ', numero);
      }
    });
  }

  testeOperadoresCreate() {
    const obs = from([1, 2, 3, 4, 5]);
    obs.subscribe({
      next: (numero) => {
        console.warn('From Emitiu: ', numero);
      }
    });

    const obs2 = of(10, 20, 30, 40, 50);

    obs2.subscribe({
      next: (numero) => {
        console.warn('Of Emitiu: ', numero);
      }
    });
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
      next: (numero) => {
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

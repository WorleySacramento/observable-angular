import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.css']
})
export class RelogioComponent implements OnInit, OnDestroy {

  hoje: Date = new Date();
  inscricao?: Subscription;

  ngOnInit(): void {
   this.inscricao = interval(1000).subscribe({
      next: () => {
        console.log('tick');
        this.hoje = new Date();
        // console.warn('', this.hoje.toLocaleDateString());
      }

    })
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.inscricao?.unsubscribe();
  }
  
}

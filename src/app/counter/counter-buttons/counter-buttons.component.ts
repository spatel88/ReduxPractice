import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {


  constructor(private store: Store<{counterreducer: CounterState}>) { }

  ngOnInit(): void {
  }

  onReset(){
    this.store.dispatch(reset());
  }

  onDecrement() {
    this.store.dispatch(decrement())
  }
  onIncrement() {
    this.store.dispatch(increment());
  }

}

import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { scan, takeWhile, repeatWhen } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ timer$ | async | time}}</h1>
  `
})
export class AppComponent  {
  mins = 1 * 60;   // No.of minutes * seconds
  timer$ = timer(0, 1000).pipe(
    scan(acc => --acc, this.mins),
    takeWhile(x => x >= 0),
    repeatWhen (x => x )
  )
}

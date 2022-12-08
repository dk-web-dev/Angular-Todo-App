import { Component, OnInit } from '@angular/core';
import {
  Observable,
  of,
  from,
  merge,
  pipe,
  map,
  fromEvent,
  pluck,
  take,
  filter,
  interval,
  switchMap,
  mergeMap,
} from 'rxjs';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  faAngular,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faReact,
  faSnapchat,
  faTwitter,
  faVuejs,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  title: string = 'rxJs & rxjs Operator';

  faAngular = faAngular;
  faReact = faReact;
  faVue = faVuejs;
  faGithub = faGithub;
  faSnapchat = faSnapchat;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faYoutube = faYoutube;

  message1: number | undefined;

  constructor() {}

  ngOnInit() {
    //Observable from Create Method
    const obsUsingCreate = Observable.create((observer: any) => {
      observer.next('1');
      observer.next('2');
      observer.next('3');

      observer.complete();
    });

    obsUsingCreate.subscribe({
      next: (val: any) => {
        console.log(val);
        this.message1 = val;
      },
      error: (error: any) => console.log(error),
      complete: () => console.log('observable completed using create method'),
    });

    //observable using new observable consatructor
    const obsUsingConstructor = new Observable((observer: any) => {
      observer.next('1');
      observer.next('2');
      observer.next('3');

      observer.complete();
    });

    obsUsingConstructor.subscribe({
      next: (val: any) => console.log(val),
      error: (error: any) => console.log(error),
      complete: () => console.log('observable completed using constructor'),
    });

    //observalbe using of rxjs operator
    const ofArr: string[] = ['A', 'B', 'C', 'D'];
    const obsUsingOf = of(ofArr);
    obsUsingOf.subscribe({
      next: (val: any) => console.log(val),
      error: (error: any) => console.log(error),
      complete: () =>
        console.log('observable completed using of rxjs operator'),
    });

    //observalbe using from rxjs operator
    const fromArr: string[] = ['A', 'B', 'C', 'D'];
    const obsUsingFrom = from(fromArr);
    obsUsingFrom.subscribe({
      next: (val: any) => console.log(val),
      error: (error: any) => console.log(error),
      complete: () =>
        console.log('observable completed using from rxjs operator'),
    });

    //observable using merge() operator
    const obs1 = of(['d', 'h', 'a', 'r']);
    const obs2 = of(['m', 'e', 's', 'h']);
    const obsMerge = merge(obs1, obs2);
    obsMerge.subscribe({
      next: (val) => console.log(val),
      error: (error) => console.log(error),
      complete: () => console.log('merge two observable completed'),
    });

    //observable using map() operator
    const obsSource = of(1, 2, 3, 4, 5);
    const obsMap = obsSource.pipe(map((val: any) => val + 10));
    obsMap.subscribe({
      next: (val) => console.log(val),
      error: (err) => console.log(err),
      complete: () => console.log('observable completed using map() oeprator'),
    });

    //observable using filter() operator
    const obsfilterSource = from([101, 102, 103, 104, 105, 106, 107]);
    const obsFilter = obsfilterSource.pipe(filter((val) => val === 105));
    obsFilter.subscribe({
      next: (val) => console.log(val),
      error: (error) => console.log(error),
      complete: () =>
        console.log('observable completed using filter() oeprator'),
    });

    // fromEvent() oeprator
    const obsEvent = fromEvent(document, 'click');
    obsEvent.subscribe({
      next: () => console.log('you have click page'),
    });

    // pluck() oeprator
    const obspluckSource = from([
      { id: 1, name: 'Dharmesh', age: 25 },
      { id: 2, name: 'himanshu', age: 20 },
      { id: 3, name: 'jay', age: 35 },
    ]);
    const obsPluck = obspluckSource.pipe(pluck('name'));
    obsPluck.subscribe({
      next: (val) => console.log(val),
      error: (error) => console.log(error),
      complete: () =>
        console.log('observable completed using pluck() oeprator'),
    });

    // take() operator
    const obstakeSource = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    const obsTake = obstakeSource.pipe(take(8));
    obsTake.subscribe({
      next: (val) => console.log(val),
      error: (err) => console.log(err),
      complete: () => console.log('take operator completed'),
    });

    //SWITCH MAP() operator
    const obs$1 = fromEvent(document, 'click');
    const obs$2 = of('switch to this observable after clicking the page');
    const finalobs$ = obs$1.pipe(switchMap((event) => obs$2));
    finalobs$.subscribe({
      next: (val) => console.log(val),
      error: (err) => console.log(err),
      complete: () => console.log('switchMap() operator completed'),
    });

    //MERGE MAP() operator
    const obs$3 = of([1,2,3]);
    const obs$4 = of([8,9,10]);
    const finalmergeMap = obs$3.pipe(
      mergeMap((event1) => obs$4.pipe(map((event2) => event1 + ' ' + event2)))
    );
    finalmergeMap.subscribe({
      next: (val) => console.log(val),
      error: (err) => console.log(err),
      complete: () => console.log('mergeMap() operator completed'),
    });


  }
}

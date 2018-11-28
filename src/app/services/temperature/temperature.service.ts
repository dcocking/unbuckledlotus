import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor() { }

/**
     * Retrieve the current temperature as an observable
     * @returns {Observable<number>} An observable that is updated with the current temperature
     */
    getTemperature(): Observable <number> {
      let initialTemperature = 29;
      let temperature$: Observable <number>;  // Note that syntactic practice is to end observable variables with a $

      // Note that you don't call "new" for observables, such as let observer = new Observable.
      // Rather you call Observable.create as below, using the .create factory method in the Observable class
      temperature$ = Observable.create(observer => {
          let currentTemperature = initialTemperature;
          
          // Below is where the magic happens. Whenever you call next and pass in a value,
          // any subscribers will receive that updated value
          observer.next(currentTemperature);

          // This may look fancy but it's just an interval function that calls an anonymous function
          // every 2 seconds (2000ms) to reduce the temperature by 1 and update all subscribers.
          setInterval(() => {
              currentTemperature--;
              observer.next(currentTemperature); // Again, this is where the magic of an observable happens.
          },2000);
      })

      return temperature$;
  }

      /**
     * Subscribe to the observable temperature function and log results to the console
     */
    checkTemperature() {
        // Note we call subscribe here just like on Firebase objects or lists. The 'temp' variable
        // below, if you trace it back, is populated by the observer.next(currentTemperature) call.
        // So the observer is passing currentTemperature to any subscribers, we're a subscriber, and
        // mapping that into a variable we called temp in the anonymous function we provided subscribe below.
        this.getTemperature().subscribe(temp => {
            console.log("Current Temperature: " + temp + "˚ Celcius");
        })
    }

}

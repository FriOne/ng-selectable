import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'simple-select-examples',
  templateUrl: 'simple-select-examples.html',
})
export class SimpleSelectExamples {
  planets$: Observable<any[]>;
  planetsNamesChunk$: Observable<string[]>;

  constructor(private http: Http) {}

  ngOnInit() {
    this.planets$ = this.http
      .get('https://swapi.co/api/planets')
      .map(response => response.results);

    this.planetsNamesChunk$ = this.planets$
      .map(planets => planets.map(planet => planet.name));
  }
}

import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Injectable()
export class CoreService {
  routeChangeEvent = new EventEmitter();
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) { }
  watchRoute() {
    (((((this.router.events
      .filter(event => event instanceof NavigationEnd) as Observable<any>)
      .map(() => this.activatedRoute)) as Observable<any>)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }) as Observable<any>)
      .filter(route => route.outlet === 'primary') as Observable<any>)
      .subscribe((route) => {
        this.titleService.setTitle(route.snapshot.data['title']);
        this.routeChangeEvent.emit();
      });
  }
  logout() {
    this.router.navigate(['/login']);
  }
}

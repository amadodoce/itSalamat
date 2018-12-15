import {Injectable} from '@angular/core';
import {CanDeactivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactive implements CanDeactivate<CanComponentDeactivate> {
  constructor(private router: Router) {
  }

  canDeactivate(component: CanComponentDeactivate) {

    return component.canDeactivate ? component.canDeactivate() : true;
  }


}



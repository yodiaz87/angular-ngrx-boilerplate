import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';


export const back = createAction('[Router] Back');
export const forward = createAction('[Router] Forward');

export const go = createAction(
  '[Router] Go',
  props<{
    path: any[];
    query?: object;
    extras?: NavigationExtras;
  }>()
);


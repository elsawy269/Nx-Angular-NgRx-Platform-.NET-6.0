import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as layoutActions from '../../store/actions';

@Injectable()
export class LayoutEffects {
  constructor(private actions$: Actions, private titleService: Title) {}

  setTitle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(layoutActions.setTitle),
        tap(({ title }) => {
          this.titleService.setTitle(title + ' | POS SYSTEM');
        }),
      ),
    { dispatch: false },
  );
}

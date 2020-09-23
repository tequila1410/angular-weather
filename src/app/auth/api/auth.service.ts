import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { catchError, delay, mergeMap } from 'rxjs/operators';

import { User } from '../models/user.model';
import { Credentials } from '../models/credentials.model';

@Injectable()
export class AuthService {

  constructor() {}

  /**
   * Login user by creds
   * @param {Credentials} credentials
   */
  login(credentials: Credentials): Observable<{user: User, token: string}> {
    // Mock data for test
    if (credentials.login === 'admin@gmail.com' && credentials.password === '123123')
      return of({
        user: {
          phone: '5234',
          name: 'Vlad',
          email: 'mail@gmail.com'
        },
        token: 'some JWT token 152'
      })
        .pipe(delay(2000));

    // Generate error
    const throwingObservable = throwError('Invalid user credentials');
    return throwingObservable.pipe(
      catchError(e => timer(1000).pipe(mergeMap(t => throwError(e))))
    );
  }
}

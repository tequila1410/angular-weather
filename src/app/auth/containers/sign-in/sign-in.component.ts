import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthFacade } from '../../auth.facade';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit, AfterViewInit {

  /**
   * Form for user login credentials
   * @type {FormGroup}
   */
  public form: FormGroup;

  /**
   *
   * @private
   */
  private formSubmitAttempt: boolean;

  /**
   * Check if user loading
   * @type {Observable<boolean>}
   */
  public userLoading: Observable<boolean>;

  /**
   * Contains sign in error
   * @type {Observable<string>}
   */
  public signInError: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade
  ) {

  }

  /**
   * Call on component init
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.email, Validators.minLength(6), Validators.maxLength(100)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]]
    });
    this.signInError = this.authFacade.getSignInError();
  }

  /**
   * Call after view init
   */
  ngAfterViewInit(): void {
      this.userLoading = this.authFacade.isUserLoading()
      .pipe(
        tap(isLoading => {
          isLoading ? this.form.disable() : this.form.enable();
        })
      );
  }

  /**
   * Call on login submit
   */
  onSubmit(): void {
    if (this.form.valid) {
      const username = this.form.get('username').value;
      const password = this.form.get('password').value;
      this.authFacade.login(username, password);
    }
  }

}

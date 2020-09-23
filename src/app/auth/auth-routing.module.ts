import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './containers';
import { OnlyGuestGuard } from '../core/guards/only-guest.guard';

const routes: Routes = [{
  path: 'auth',
  component: SignInComponent,
  canActivate: [OnlyGuestGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}

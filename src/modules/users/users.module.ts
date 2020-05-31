import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserResolver } from './services/resolvers/user.resolver';

import { userFeatureKey,  userReducer, effects } from './store';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// guards
// import * as fromGuards from './guards';

// services
import * as fromServices from './services';

// routes
export const routes: Routes = [
  {
    path: '',
    resolve: {
      users: UserResolver
    },
    //  canActivate: [fromGuards.PizzasGuard],
    component: fromContainers.UsersComponent
  },
  {
    path: 'new',
   // canActivate: [fromGuards.PizzasGuard, fromGuards.ToppingsGuard],
    component: fromContainers.UserItemComponent,
  }

];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(userFeatureKey, userReducer),
    EffectsModule.forFeature(effects),
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class UsersModule {}

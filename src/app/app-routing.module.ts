import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {UserComponent} from './users/user/user.component';
import {HomeComponent} from './home/home.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {UsersComponent} from './users/users.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';

const appRouts = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]},
  {path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/:edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
    ]},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'page-not-found'}
];
@NgModule({
  imports: [
    // RouterModule.forRoot(appRouts, {useHash: true})
    RouterModule.forRoot(appRouts)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}

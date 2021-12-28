import { AddUserComponent } from './../components/add-user/add-user.component';
import { AddTodoComponent } from './../components/add-todo/add-todo.component';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

// we can not create this interface after Injectable decorator
export interface CanComponentLeave {
  canLeave: () => boolean;
}

@Injectable({
  providedIn: 'root',
})
// export class UnSavedChangesGuard implements CanDeactivate<unknown> {
//   canDeactivate(
//     component: unknown,
//     currentRoute: ActivatedRouteSnapshot,
//     currentState: RouterStateSnapshot,
//     nextState?: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     return true;
//   }
// }

// export class UnSavedChangesGuard implements CanDeactivate<AddUserComponent> {
//   canDeactivate(component: AddUserComponent) {
//     if (component.userName.dirty) {
//       console.log(component.userName.dirty, 'component.userName');
//       return confirm(
//         'You have some unsaved changes. Are you sure you want to navigate'
//       );
//     }
//     return true;
//   }
// }

// we see that we can't use the above guard in more than one route so its a problem we can't reuse it so make some changes in the above code to reuse it
export class UnSavedChangesGuard implements CanDeactivate<CanComponentLeave> {
  canDeactivate(component: CanComponentLeave) {
    if (component.canLeave) {
      return component.canLeave();
    }
    return true;
  }
}

import { CanComponentLeave } from './../../guards/un-saved-changes.guard';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  template: `
    <form class="my-5">
      <div class="form-group">
        <label for="add-user">Add user</label>
        <input
          type="text"
          class="form-control"
          id="add-user"
          placeholder="Enter user"
          [formControl]="userName"
        />
      </div>
      <input
        type="submit"
        class="btn btn-primary mt-3 btn-sm"
        value="Add User"
      />
    </form>
  `,
  styles: [],
})
// export class AddUserComponent implements OnInit {
//   userName: FormControl = new FormControl();
//   constructor() {}
//   ngOnInit(): void {}
// }

// for reusing unsaved gaurd code
export class AddUserComponent implements OnInit, CanComponentLeave {
  constructor() {}
  userName: FormControl = new FormControl();
  canLeave(): boolean {
    if (this.userName.dirty) {
      return confirm(
        'You have some unsaved changes. Are you sure you want to navigate'
      );
    }
    return true;
  }
  ngOnInit(): void {}
}

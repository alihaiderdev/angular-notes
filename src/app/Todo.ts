import { FormControl } from '@angular/forms';
export interface Todo {
  sno?: string;
  title?: string | FormControl;
  description?: string | FormControl;
  active?: boolean;
}

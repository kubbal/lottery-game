import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../../model/user.interface';
import { Store } from '@ngrx/store';
import { selectLoginError, selectUsers } from '../../store/selector/user.selector';
import { loadUsers, loginUser } from '../../store/action/user.action';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  users$: Observable<UserInterface[]>;
  error$: Observable<string | null>;
  selectedUserId: string = '';
  password: string = '';
  store = inject(Store);

  constructor() {
    this.users$ = this.store.select(selectUsers);
    this.error$ = this.store.select(selectLoginError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  onUserSelect(event: any) {
    this.selectedUserId = event.target.value;
  }

  login() {
    this.store.dispatch(loginUser({ userId: this.selectedUserId, password: this.password }));
  }
}

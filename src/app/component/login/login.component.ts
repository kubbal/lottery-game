import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../../model/user.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { UserListService } from '../../service/user-list.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  authService = inject(AuthService);
  userListService = inject(UserListService);

  users$?: Observable<UserInterface[]>;
  error$?: Observable<string | null>;
  selectedUserId: string = '';
  password: string = '';

  ngOnInit(): void {
    this.users$ = this.userListService.getUsers();
    this.error$ = this.userListService.getLoginError();
    this.userListService.loadUsers();
  }

  onUserSelect(event: any) {
    this.selectedUserId = event.target.value;
  }

  login() {
    this.authService.login(this.selectedUserId, this.password);
  }
}

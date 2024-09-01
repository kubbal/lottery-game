import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
export class LoginComponent implements OnInit, OnDestroy {
  authService = inject(AuthService);
  userListService = inject(UserListService);

  users$?: Observable<UserInterface[]>;
  error$?: Observable<string | null>;
  selectedUserId: string = '';
  password: string = '';

  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.userListService.loadUsers();
    this.users$ = this.userListService.getUsers();
    this.error$ = this.userListService.getLoginError();
    
    this.subscription.add(
      this.users$.subscribe(users => {
        if (users.length > 0) {
          this.selectedUserId = users[0].userId;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onUserSelect(event: any) {
    this.selectedUserId = event.target.value;
  }

  login() {
    this.authService.login(this.selectedUserId, this.password);
  }
}

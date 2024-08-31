import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { GameComponent } from './component/game/game.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'game', component: GameComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: '' }
];

import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { GameComponent } from './component/game/game.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'game', component: GameComponent },
];

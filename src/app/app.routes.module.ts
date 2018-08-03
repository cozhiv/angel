import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GameComponent} from './game/game.component';
import {SubscribeComponent} from './subscribe/subscribe.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'game', component: GameComponent},
    {path: 'subscribe', component: SubscribeComponent}
];
@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home.component';
import {HomeService} from './home.service';
@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [HomeService],
    exports: [HomeComponent]
})
export class HomeModule {}
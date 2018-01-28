import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import homeRoutes from './home.routes';
import { NgModule } from '@angular/core';

@NgModule ({
    imports: [CommonModule, homeRoutes],
    declarations: [HomeComponent]
})
export default class HomeModule {}

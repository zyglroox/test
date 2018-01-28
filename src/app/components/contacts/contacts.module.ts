import { ContactComponent } from './../contact/contact.component';
import { ContactsComponent } from './contacts.component';
import { CommonModule } from '@angular/common';
import contactsRoutes from './contacts.routes';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [CommonModule, contactsRoutes, HttpModule],
    declarations: [ContactsComponent, ContactComponent]
})
export default class ComponentsModule {}

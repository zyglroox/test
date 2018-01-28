import { ContactComponent } from './../contact/contact.component';
import { ContactsComponent } from './contacts.component';
import { RouterModule } from '@angular/router';
const routes = [
    {path: '', component: ContactsComponent},
    {path: ':id', component: ContactComponent}
];

export default RouterModule.forChild(routes);

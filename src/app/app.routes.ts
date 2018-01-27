import { ContactsComponent } from './components/contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes = [
    {path: '', component: HomeComponent},
    {path: 'contacts', component: ContactsComponent}
  ];

  export default RouterModule.forRoot(routes);

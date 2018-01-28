import { RouterModule } from '@angular/router';
import HomeModule from './components/home/home.module';
import ContactsModule from './components/contacts/contacts.module';

const routes = [
    {path: '', loadChildren: () => HomeModule},
    {path: 'contacts', loadChildren: () => ContactsModule}
  ];

  export default RouterModule.forRoot(routes);

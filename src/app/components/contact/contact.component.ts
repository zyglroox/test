import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  id;
  contact$;
  constructor(private route: ActivatedRoute, private http: Http) {
    const apiUrl = 'http://localhost:3000/';
    this.contact$ = route.params.
      map((p: any) => p.id).
      switchMap(id => http.get(apiUrl + 'people/' + id).
      map(res => res.json())).
      map(contact => Object.assign({}, contact, {image: apiUrl + contact.image})).
      startWith({name: 'Loading...', image: ''});
  }

  ngOnInit() {
  }

}

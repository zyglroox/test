import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  id;
  constructor(private route: ActivatedRoute) {
    this.id = route.params.map((p: any) => p.id);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  valores_db:any={};

  constructor(private database:Database, ) {}

  ngOnInit() {
    const baseRoute = '/casa';
    
      const route = ref(this.database,baseRoute);
      object(route).subscribe(attributes => {
        this.valores_db = attributes.snapshot.val();
        console.log(this.valores_db);
      });
    ;
  }
  
}

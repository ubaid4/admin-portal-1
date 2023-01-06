import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css']
})
export class AddUpdateComponent implements OnInit {
editMode:boolean=false;
constructor(private router: Router) {
  router.events.subscribe(val => {
    if (val instanceof NavigationEnd) {
      let router=val.url;
      if(router.split('/').includes('edit')){
        this.editMode=true
      }
     
    }
  });
}

  ngOnInit(): void {

  }

}

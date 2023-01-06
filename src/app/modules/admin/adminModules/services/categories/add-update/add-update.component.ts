import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiRequestService } from 'src/app/services/api-request.service';
import { updateArrayBindingPattern } from 'typescript';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css']
})
export class AddUpdateComponent implements OnInit {

  editMode: boolean = false;
  constructor(private router: Router, private apiReqService: ApiRequestService) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        let router = val.url;
        if (router.split('/').includes('edit')) {
          this.editMode = true
        }

      }
    });
  }


  ngOnInit(): void {
    if(this.editMode){
      this.apiReqService.get('5464646848dasdas')
    }
  }
  submit() {
    if (!this.editMode) {
      this.apiReqService.post({ id: 1, name: 'ubaid', address: 'khan' })
    }
    else {
      this.apiReqService.put({ id: 1, name: 'ubaid', address: 'khan' })

    }
  }

}

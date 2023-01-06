import { generateAnalysis } from '@angular/compiler-cli/src/ngtsc/indexer';
import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'src/app/services/api-request.service';
import { CategoryService } from '../category.service';
import { generalRequest} from './../../../../../../utils/generalRequest'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private apiReqService:ApiRequestService,private categorySrvs:CategoryService) {
    apiReqService.updateModuleUrl("services","categories")
  }
  // generalReq=new generalRequest("services","categories")
  data = [
    { id: 1, name: 'category', icon: '', status: 'Active', createdAt: '01-12-2020', updatedAt: '01-12-2020' },
    { id: 2, name: 'category', icon: '', status: 'Active', createdAt: '01-12-2020', updatedAt: '01-12-2020' },
    { id: 3, name: 'category', icon: '', status: 'Active', createdAt: '01-12-2020', updatedAt: '01-12-2020' },
    { id: 4, name: 'category', icon: '', status: 'Active', createdAt: '01-12-2020', updatedAt: '01-12-2020' }
  ]
  ngOnInit(): void {
    this.categorySrvs.getAllCategories().subscribe((res:any)=>{
      console.log('here is responce',res);
      
    })
  }

  dalete(id:string){
   console.log('clicked');
   this.apiReqService.delete(id)

  }
}

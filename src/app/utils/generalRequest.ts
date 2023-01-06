import { ApiRequestService } from "../services/api-request.service";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export  class generalRequest {
    category:string;
    subCategory:string
    fUrl:string;
    constructor(private apiReqService:ApiRequestService) {
        // this.category = _category;
        // this.subCategory= _subCategory;
        // this.fUrl=_category+"/"+_subCategory;
    }
    gDelete(id:string) {
        console.log('delete:'+this.category+this.subCategory);

    }
    gPut(body:any) {
        console.log('put is:'+this.category+this.subCategory);

    }
    gGet(id:string) {
        //this.apiReqService.put(id,this.fUrl)
        // console.log('get is:'+this.category+this.subCategory);

    }
    gPost(body:any) {
        console.log('post is:'+this.category+this.subCategory);

    }
}
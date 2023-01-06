import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(
    private http: HttpClient
    ) { }
  url = "http://localhost:3000/api/admin/";
  
  updateModuleUrl(module: string,subModule:string) {
    this.url = this.url +module+'/'+subModule
  }



  post(body: any) {
    console.log('API Req Service of post with URL' + this.url  + "  and body is:" ,body);

  }
  put(body: any) {
    console.log('API Req Service of put with URL' + this.url  + "  and body is:" ,body);

  }
  delete(id: string) {
    console.log('API Req Service of delete with URL' + this.url  + "  and id is:" + id);


  }
  get(id: string) {
    console.log('API Req Service of get with URL' + this.url  + "  and id is:" + id);

  }
  getAll(){
     return this.http.get(this.url)
  
    //console.log('API Req Service of get All with URL' + this.url  );

  }


}

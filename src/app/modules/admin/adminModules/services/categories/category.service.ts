import { Injectable } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private apiReqService: ApiRequestService
    ) { 
    // this.apiReqService.updateModuleUrl("services","categories")
  }
  categories = new Subject();
  categoriesReceiver = this.categories.asObservable();
  getAllCategories(): Observable<any> {

    return new Observable(observer => {
    this.apiReqService.getAll().subscribe((res: any) => {
        observer.next(res)

      })

    })
   
   
  }
  getCategory() {

  }
  addCategory() {

  }
  deleteCategory() {

  }
  editCategory() {

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {

  dropdownList:any= [];
    selectedItems:any = [];
    dropdownSettings = {};
    ngOnInit(){
        this.dropdownList = [
                              {"id":1,"itemName":"Ali"},
                              {"id":2,"itemName":"Khan"},
                              
                              
                              {"id":3,"itemName":"Dani"},
                              {"id":4,"itemName":"Shah"},
                              {"id":5,"itemName":"Jamal"},
                              {"id":7,"itemName":"Islem"},
                              {"id":8,"itemName":"Jameel"},
                              {"id":9,"itemName":"Jamal"},
                              {"id":10,"itemName":"Islem"},
                              {"id":11,"itemName":"Jameel"},
                              
                            ];
        this.selectedItems = [
          // {"id":1,"itemName":"Ali"}, 
      
                            ];
        this.dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Search for Users",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                };            
    }
    onItemSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any){
        console.log(items);
    }
    onDeSelectAll(items: any){
        console.log(items);
    }


}

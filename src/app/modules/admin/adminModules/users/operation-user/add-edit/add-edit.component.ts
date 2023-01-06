import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  editMode=false;
  dropdownList:any= [];
    selectedItems:any = [];
    dropdownSettings = {};
    ngOnInit(){
        this.dropdownList = [
                              {"id":1,"itemName":"Admin"},
                              {"id":2,"itemName":"General Manager "},
                              
                              {"id":2,"itemName":"Super Admin"},
                              {"id":3,"itemName":"Manager"},
                              {"id":4,"itemName":"Manager 2"},
                              {"id":5,"itemName":"Services Manager"},
                              {"id":7,"itemName":"Ads Manages"},
                              {"id":8,"itemName":"category Manager"},

                              
                            ];
        this.selectedItems = [
          {"id":1,"itemName":"Super Admin"},
          {"id":3,"itemName":"Manager"},
          {"id":8,"itemName":"category Manager"},
                            ];
        this.dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select Roles",
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
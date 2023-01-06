import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  editMode:boolean=false;
 
  dropdownList:any= [];
    selectedItems:any = [];
    dropdownSettings = {};
    ngOnInit(){
        this.dropdownList = [
                              {"id":1,"itemName":"Dashboard"},
                              {"id":2,"itemName":"Services"},
                              
                              
                              {"id":3,"itemName":"Core Activities"},
                            

                              
                            ];
        this.selectedItems = [
          // {"id":1,"itemName":"Ali"}, 
      
                            ];
        this.dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Search for feature",
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

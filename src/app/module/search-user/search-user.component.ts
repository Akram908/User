import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {
  name:string | undefined;
  data:any = {};
  show:boolean = false;
  storageData:any[] = [];

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.show = false;
    //this.onSubmit();
  }

  onSubmit(){
    //let name = "octocat"
      this.userservice.getUserData(this.name).subscribe(res => {
        console.log("-------------",res);

        this.data = res;
        this.show = true;
        this.storageData.push({name:this.name,status:"success"});
        this.userservice.changeMessage(this.storageData)
        
      },(err) => {
        this.storageData.push({name:this.name,status:err});
        this.userservice.changeMessage(this.storageData)
      })
  }

}

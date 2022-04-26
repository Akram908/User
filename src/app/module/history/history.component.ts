import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  data:any[]=[];
  constructor(private userservice:UserService,private router: Router) { }

  ngOnInit(): void {
    this.userservice.searchData$.subscribe(val => {
      this.data = val
      //console.log("--------",this.data)
    })
  }

  onClear(){
    let data:any;
        data = [];
    this.userservice.changeMessage(data)
  }

  onsearch(val:any){
    console.log(val);
    //sessionStorage.setItem('name',val.name)
    this.userservice.changeMessage(val.name)
    this.router.navigate(['/search']);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Subject, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    api: string = 'https://api.github.com/';
    searchData:BehaviorSubject<any> = new BehaviorSubject<any>([]);;
    searchData$ = this.searchData.asObservable();
    nameData:BehaviorSubject<any> = new BehaviorSubject<any>([]);;
    nameData$ = this.searchData.asObservable();

  constructor(private http: HttpClient) {}

  getUserData(userName: any) {
    return this.http.get(this.api + 'users/' + userName).pipe(catchError(this.handleError));
  } 

  changeMessage(message: any) {
    this.searchData.next(message)
  }

  changeName(message: any) {
    this.searchData.next(message)
  }

  handleError(error: any) {
    let errorCode = '';
    if (error.error instanceof ErrorEvent) {

    } else {
      errorCode = `${error.error.message}`;
      console.log(errorCode)
        
    }
    return throwError(errorCode);
  }
}
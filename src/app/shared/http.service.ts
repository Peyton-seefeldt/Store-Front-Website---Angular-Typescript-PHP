import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class HttpService {
   apiUrl = 'http://washington.uww.edu/cs482/seefeldtpj18/finalApi/?action=';
   constructor(private http: HttpClient) { }

   searchByKey(key, value) {
      return this.http.get<any>(this.apiUrl + 'searchCourses/' + key + '/' + value);
   }
   searchLocationList(key, value) {
      return this.http.get<any>(this.apiUrl + 'searchLocations/' + key + '/' + value);
   }


}

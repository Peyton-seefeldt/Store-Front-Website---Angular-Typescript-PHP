import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  myFormModel: FormGroup;
  searchKeys = [{ id: 'instructor', label: 'Search by instructor' },
  { id: 'location', label: 'Search by location' },
  { id: 'course', label: 'Search by subject' }];
  LocationList: any = [];
  constructor(private httpService: HttpService) {

  }
  ngOnInit() {
    this.myFormModel = new FormGroup({
      searchKey: new FormControl('instructor'),
      searchValue: new FormControl(null)
    });
  }

  searchValues() {
    const searchKey = this.myFormModel.get('searchKey').value;
    const searchValue = this.myFormModel.get('searchValue').value;
    if (searchValue.length >= 2) {
      console.log(searchValue, searchKey);
      this.httpService.searchLocationList(searchKey, searchValue).subscribe(response => {
        console.log(response);
        this.LocationList = response;
      });
    }
  }

}

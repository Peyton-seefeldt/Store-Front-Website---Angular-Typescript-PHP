import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myFormModel: FormGroup;
  searchKeys = [{ id: 'subject', label: 'Search by subject' },
  { id: 'title', label: 'Search by title' },
  { id: 'description', label: 'Search by title or description' }];
  courseList: any = [];
  constructor(private httpService: HttpService) {

  }
  ngOnInit() {
    this.myFormModel = new FormGroup({
      searchKey: new FormControl('subject'),
      searchValue: new FormControl(null)
    });
  }

  searchValues() {
    const searchKey = this.myFormModel.get('searchKey').value;
    const searchValue = this.myFormModel.get('searchValue').value;
    if (searchValue.length >= 2) {
      console.log(searchValue, searchKey);
      this.httpService.searchByKey(searchKey, searchValue).subscribe(response => {
        console.log(response);
        this.courseList = response;
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Franchise } from '../franchise';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrl: './franchise.component.css',
})
export class FranchiseComponent implements OnInit {
  title = 'Franchise List';
  loading = true;
  franchises: Franchise[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.loading = true;
    this.http
      .get<Franchise[]>('franchiseList')
      .subscribe((data: Franchise[]) => {
        this.franchises = data;
        this.loading = false;
      });
  }
}

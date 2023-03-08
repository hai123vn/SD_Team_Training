import { Component, OnInit } from '@angular/core';
import { MSShift } from 'src/app/_core/models/ms-shift';
import {MsShiftService} from 'src/app/_core/services/ms-shift.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  msshifts: MSShift[] = [];
  constructor(private service: MsShiftService) { }

  // Chạy lần đầu khi trang được load lên
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe({
      next: result => {
        this.msshifts = result;
      }
    }) 
  }
}

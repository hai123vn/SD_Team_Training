import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent implements OnInit {
  account: string = 'Administrator';
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
  }
}

import {AfterViewInit, Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import * as feather from 'feather-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    feather.replace();
  }

  ngOnInit(): void {
    initFlowbite();
  }
}

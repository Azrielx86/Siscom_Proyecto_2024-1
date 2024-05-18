import {Component, OnInit} from '@angular/core';
import {Teammate} from "../../models/Teammate";
import {TeammatesService} from "../../services/teammates.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  teammates: Teammate[] = [];

  constructor(private teammateService: TeammatesService) {
  }

  ngOnInit(): void {
    this.teammateService.getAll().subscribe(t => {
      this.teammates = t;
    });
  }
}

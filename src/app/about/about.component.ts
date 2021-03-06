import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/leader';
import {LeadersService} from "../shared/services/leaders.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Array<Leader>;
  constructor(private leaderService: LeadersService) { }

  ngOnInit() {
    this.leaderService.getLeaders()
      .then(leaders => this.leaders = leaders);
  }

}

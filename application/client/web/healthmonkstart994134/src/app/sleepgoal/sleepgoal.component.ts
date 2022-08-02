import { Component, OnInit } from '@angular/core';
import { SleepgoalService } from './sleepgoal.service';

@Component({
  selector: 'app-sleepgoal',
  templateUrl: './sleepgoal.component.html',
  styleUrls: ['./sleepgoal.component.scss'],
})

export class SleepgoalComponent implements OnInit {
    public sleeptrackdetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        sleeptrack_night: '',
    }

    constructor (
        private sleepgoalService: SleepgoalService,
    ) { }

    ngOnInit() {
        this.sleeptrackdetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}
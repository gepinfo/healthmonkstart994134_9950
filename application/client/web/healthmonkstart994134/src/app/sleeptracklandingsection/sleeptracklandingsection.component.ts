import { Component, OnInit } from '@angular/core';
import { SleeptracklandingsectionService } from './sleeptracklandingsection.service';

@Component({
  selector: 'app-sleeptracklandingsection',
  templateUrl: './sleeptracklandingsection.component.html',
  styleUrls: ['./sleeptracklandingsection.component.scss'],
})

export class SleeptracklandingsectionComponent implements OnInit {
    public sleeptrackdetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        sleeptrack_night: '',
    }

    constructor (
        private sleeptracklandingsectionService: SleeptracklandingsectionService,
    ) { }

    ngOnInit() {
        this.sleeptrackdetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}
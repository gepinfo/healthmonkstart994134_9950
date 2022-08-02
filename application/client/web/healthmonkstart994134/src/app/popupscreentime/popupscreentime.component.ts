import { Component, OnInit } from '@angular/core';
import { PopupscreentimeService } from './popupscreentime.service';

@Component({
  selector: 'app-popupscreentime',
  templateUrl: './popupscreentime.component.html',
  styleUrls: ['./popupscreentime.component.scss'],
})

export class PopupscreentimeComponent implements OnInit {
    public sleeptrackdetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        sleeptrack_night: '',
    }

    constructor (
        private popupscreentimeService: PopupscreentimeService,
    ) { }

    ngOnInit() {
        this.sleeptrackdetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}
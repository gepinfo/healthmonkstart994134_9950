import { Component, OnInit } from '@angular/core';
import { Popupscreendate Service } from './popupscreendate .service';

@Component({
  selector: 'app-popupscreendate ',
  templateUrl: './popupscreendate .component.html',
  styleUrls: ['./popupscreendate .component.scss'],
})

export class Popupscreendate Component implements OnInit {
    public sleeptrackdetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        sleeptrack_night: '',
    }

    constructor (
        private popupscreendate Service: Popupscreendate Service,
    ) { }

    ngOnInit() {
        this.sleeptrackdetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}
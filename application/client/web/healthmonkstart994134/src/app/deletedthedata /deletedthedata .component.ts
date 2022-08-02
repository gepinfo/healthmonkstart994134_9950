import { Component, OnInit } from '@angular/core';
import { Deletedthedata Service } from './deletedthedata .service';

@Component({
  selector: 'app-deletedthedata ',
  templateUrl: './deletedthedata .component.html',
  styleUrls: ['./deletedthedata .component.scss'],
})

export class Deletedthedata Component implements OnInit {
    public sleeptrackdetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        sleeptrack_night: '',
    }

    constructor (
        private deletedthedata Service: Deletedthedata Service,
    ) { }

    ngOnInit() {
        this.sleeptrackdetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}
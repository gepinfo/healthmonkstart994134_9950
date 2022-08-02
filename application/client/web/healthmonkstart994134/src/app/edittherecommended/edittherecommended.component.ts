import { Component, OnInit } from '@angular/core';
import { EdittherecommendedService } from './edittherecommended.service';

@Component({
  selector: 'app-edittherecommended',
  templateUrl: './edittherecommended.component.html',
  styleUrls: ['./edittherecommended.component.scss'],
})

export class EdittherecommendedComponent implements OnInit {
    public sleeptrackdetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        sleeptrack_night: '',
    }

    constructor (
        private edittherecommendedService: EdittherecommendedService,
    ) { }

    ngOnInit() {
        this.sleeptrackdetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}
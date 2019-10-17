import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  status = ['Stable', 'Critical', 'Finished'];
  submitted = false;

  ngOnInit(): void {
    this.form = new FormGroup({
      'projectname': new FormControl(null, Validators.minLength(1)),
      'email': new FormControl(null, Validators.email),
      'status': new FormControl()
    });


  }

  onSubmit() {
    this.submitted = true;
  }
}

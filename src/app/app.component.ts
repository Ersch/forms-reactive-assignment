import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomeValidators} from './custome-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  status = ['Stable', 'Critical', 'Finished'];
  submitted = false;
  customValidators: CustomeValidators;

  ngOnInit(): void {
    this.form = new FormGroup({
      'projectname':
        new FormControl(
          null,
          [Validators.minLength(1)], CustomeValidators.forbiddenPojectNameAsyncValidator),
      'email': new FormControl(null, Validators.email),
      'status': new FormControl('Critical')
    });


  }

  onSubmit() {
    this.submitted = true;
  }

}

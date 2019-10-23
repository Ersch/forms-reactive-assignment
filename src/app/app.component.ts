import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  status = ['Stable', 'Critical', 'Finished'];
  submitted = false;
  forbiddenProjectNames = ['Test', 'test'];

  ngOnInit(): void {
    this.form = new FormGroup({
      'projectname':
        new FormControl(
          null,
          [Validators.minLength(1)], this.forbiddenPojectNameAsyncValidator),
      'email': new FormControl(null, Validators.email),
      'status': new FormControl()
    });


  }

  onSubmit() {
    this.submitted = true;
  }


  forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenPojectNameAsyncValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (((resolve, reject) => {
        setTimeout(() => {
          if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
            resolve({'nameIsForbidden': true});
          } else {
            resolve(null);
          }
        }, 1500);
      }))
    );
    return promise;
  }
}

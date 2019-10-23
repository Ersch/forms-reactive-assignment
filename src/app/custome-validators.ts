import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class CustomeValidators {

  static forbiddenProjectNames = ['Test', 'test'];

  static forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  static forbiddenPojectNameAsyncValidator(control: FormControl): Promise<any> | Observable<any> {
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

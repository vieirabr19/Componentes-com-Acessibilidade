import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11y-p1';
  form: FormGroup = null;

  constructor(
    private fb: FormBuilder
  ){
    this.form = fb.group({
      yesNoAnswer: [null]
    });
  }

  submit(){
    console.log(this.form.value);
  }

}

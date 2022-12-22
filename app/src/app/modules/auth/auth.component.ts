import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'auth-component',
  templateUrl: './auth.component.html',
  styleUrls:['./auth.component.css']
})
export class AuthComponent {
  title = 'AuthComponent';
  searchResult: string | null = null;

  constructor(private authService: AuthService) {}

  form = new FormGroup({
    id: new FormControl(),
  });

  get id(): any {
    return this.form.get('id');
  }

  onSubmit(): void {
    if(this.form.value.hasOwnProperty('id')){
      this.authService
        .searchById(this.form.value.id)
        .subscribe((response: any) => {
          console.log("Confi got", response)
          this.searchResult = response?.row;
        });
    }
  }
}

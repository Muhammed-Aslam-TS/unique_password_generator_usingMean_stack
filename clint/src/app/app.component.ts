import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  errorMessage = ''
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  passwordLength: number | undefined;
  includeUppercase: boolean = false;

  includeLowercase: boolean = false;
  includeNumbers: boolean = false;
  includeSpecialChars: boolean = false;
  // Similar properties for lowercase, numbers, and special characters
  generatedPassword: string | undefined;

  constructor(private http: HttpClient) { }

  generatePassword() {
    const atLeastOneOptionSelected =
      this.includeUppercase || this.includeLowercase || this.includeNumbers || this.includeSpecialChars;

    const passwordData = {
      length: this.passwordLength,
      includeUppercase: this.includeUppercase,
      includeLowercase: this.includeLowercase,
      includeNumbers: this.includeNumbers,
      includeSpecialChars: this.includeSpecialChars

      // Include other complexity preferences here
    };

    if (!atLeastOneOptionSelected) {
      // Display an error message or take any necessary action
      this.errorMessage = "Select at least one option for complexity."
      return
    }

    this.http.post('http://localhost:3000/generatePassword', passwordData)
      .subscribe((response: any) => {
        this.generatedPassword = response.password;
      });
  }

  copyToClipboard() {
    // Implement clipboard copy logic here (using document.execCommand or Clipboard API)
  }

}

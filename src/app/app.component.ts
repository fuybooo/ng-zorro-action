import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  size = '2';
  isLoading = false;
  loading = () => {
    this.isLoading = true;
    setTimeout(() => this.isLoading = false, 1000);
  }
}

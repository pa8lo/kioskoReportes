import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ingresoModal = false
  title = 'kioskoReportes';

  showDialog() {
    this.ingresoModal = true;
}
}

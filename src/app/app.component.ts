import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // sen app.component.html in datasını yönetecek olan componentsin
  styleUrls: ['./app.component.css']
})
export class AppComponent { // Angularda her şey class nesne güdümlü bir yapıya sahiptir.
  title: string = 'northwind';
  user: string = 'Emirhan Uluksar';

}
// Htmlin datasını yönettiğimiz yer componenttir.

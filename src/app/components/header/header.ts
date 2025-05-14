import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <p>
      {{ title }}
    </p>
  `,
  styles: ``
})
export class Header {
  title = "Aight"

}

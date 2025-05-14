import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="header">
      {{ title() }}
</div>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  `,
  styles: `

  .header {
    background: rgba(0,0,0,.5);
    color: black;
    padding: 1rem;
  }
  `
})
export class Header {
  title = signal("Signal!");

}

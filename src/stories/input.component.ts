import {Component, Input} from "@angular/core";

@Component({
  selector: 'storybook-input',
  template: `
    <label [for]="id">{{label}}</label>
    <input
      type="text"
      [id]="id"
      [ngClass]=""
    >`,
  styleUrls: ['./input.css'],
})
export default class InputComponent {

  /**
   * Input id
   *
   * @required
   */
  @Input()
  id: string = 'example-id';

  @Input()
  label: string = '';

  @Input()
  placeholder?: string;

  /*public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }*/
}

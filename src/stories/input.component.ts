import {Component, Input} from "@angular/core";

@Component({
  selector: 'storybook-input',
  template: `
    <label [for]="id">{{label}}</label>
    <input
      type="text"
      [placeholder]="placeholder"
      [id]="id"
      [ngClass]="'storybook-input'"
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

}

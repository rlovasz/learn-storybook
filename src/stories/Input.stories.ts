import Input from "./input.component";
import {Meta, Story} from "@storybook/angular/types-6-0";

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    placeholder: {control: 'text'},
  },
} as Meta;

const Template: Story<Input> = (args: Input) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  label: 'Name',
  id: 'name-input',
  placeholder: 'Name'
};

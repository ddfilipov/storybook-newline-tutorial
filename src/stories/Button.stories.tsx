import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/MyButton',
  component: Button
} as Meta


// Defina a template function
const Template: Story<ButtonProps> = (args) => <Button {...args}/>


export const Primary =  Template.bind({}) 
Primary.args = {
  primary: true,
  label: "Hello World",
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  primary: false,
}

export const Small = Template.bind({})
Small.args = {
  ...Primary.args,
  size: "small",
}

export const Large = Template.bind({})
Large.args = {
  ...Primary.args,
  size: "large",
}
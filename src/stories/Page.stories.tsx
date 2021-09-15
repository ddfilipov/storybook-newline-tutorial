import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Page } from './Page';
import * as HeaderStories from './Header.stories';
import { withMaxWidth } from '../../.storybook/decorators';

export default {
  title: 'Example/Page',
  component: Page,
  // add decorator here if you want to add it to every story of this component (Page). Like this -> decorator : [withMaxWidth]
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

 LoggedIn.decorators = [withMaxWidth]; // add decorator here if you want to add it to a single story like this -> LoggedIn.decorators = [withMaxWidth];

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};

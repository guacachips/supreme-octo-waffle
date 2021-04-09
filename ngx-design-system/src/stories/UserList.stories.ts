import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { UserListComponent, UserCardComponent } from 'projects/lib-components/src/public-api';
import * as UserCardStories from './UserCard.stories';



// This default export determines where the story goes in the story list
export default {
    title: 'Components/UserListComponent',
    component: UserListComponent,
    subcomponents: { UserCardComponent },
    decorators: [
      moduleMetadata({
        declarations: [
          UserCardComponent
        ]
      })
    ]
} as Meta;

// We create a “template” of how args map to rendering
const Template: Story<UserListComponent> = (args) => ({
    props: args,
    moduleMetadata: {
      declarations: [ UserListComponent, UserCardComponent ]
    }
});

export const Default = Template.bind({});
Default.args = {};

export const OneUser = Template.bind({});
OneUser.args = {
  users: [
    UserCardStories.BrendanEich.args
  ]
};
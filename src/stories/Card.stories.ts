import { Meta, Story } from '@storybook/angular';
import { CardComponent } from 'projects/ngx-sow-library/src/public-api';


// This default export determines where the story goes in the story list
export default {
    title: 'Library/CardComponent',
    component: CardComponent
} as Meta;

// We create a “template” of how args map to rendering
const Template: Story<CardComponent> = (args) => ({
    props: args
});

export const DefaultCard = Template.bind({});
DefaultCard.args = {};

export const LongContent = Template.bind({});
LongContent.args = {
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper turpis ut tempor egestas. Nulla ornare tellus a viverra volutpat. Aenean ornare ullamcorper facilisis. Etiam sit amet auctor nisl, et sagittis ligula. In sit amet erat eu sem consectetur iaculis. Sed at cursus diam. Nullam eu vulputate dui. Donec pretium libero ac fermentum lacinia. Sed pulvinar arcu sed neque vehicula aliquet.'
};
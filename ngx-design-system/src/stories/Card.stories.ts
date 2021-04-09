import { Meta, Story } from '@storybook/angular';
import { CardComponent } from 'projects/lib-elements/src/public-api';


// This default export determines where the story goes in the story list
export default {
    title: 'Elements/CardComponent',
    component: CardComponent
} as Meta;

// We create a “template” of how args map to rendering
const Template: Story<CardComponent> = (args) => ({
    props: args
});

export const DefaultCard = Template.bind({});
DefaultCard.args = {};
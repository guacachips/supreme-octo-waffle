import { Meta, Story } from '@storybook/angular';
import { TitleComponent } from 'projects/lib-elements/src/public-api';


// This default export determines where the story goes in the story list
export default {
    title: 'Elements/TitleComponent',
    component: TitleComponent
} as Meta;

// We create a “template” of how args map to rendering
const Template: Story<TitleComponent> = (args) => ({
    props: args
});

export const Default = Template.bind({});
Default.args = {};
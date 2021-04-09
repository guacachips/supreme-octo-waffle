import { Meta, Story } from '@storybook/angular';
import { ChipComponent } from 'projects/lib-elements/src/public-api';


// This default export determines where the story goes in the story list
export default {
    title: 'Elements/ChipComponent',
    component: ChipComponent
} as Meta;

// We create a “template” of how args map to rendering
const Template: Story<ChipComponent> = (args) => ({
    props: args
});

export const Default = Template.bind({});
Default.args = {};
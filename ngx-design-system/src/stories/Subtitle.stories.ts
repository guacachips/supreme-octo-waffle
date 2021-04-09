import { Meta, Story } from '@storybook/angular';
import { SubtitleComponent } from 'projects/lib-elements/src/public-api';


// This default export determines where the story goes in the story list
export default {
    title: 'Elements/SubtitleComponent',
    component: SubtitleComponent
} as Meta;

// We create a “template” of how args map to rendering
const Template: Story<SubtitleComponent> = (args) => ({
    props: args
});

export const Default = Template.bind({});
Default.args = {};
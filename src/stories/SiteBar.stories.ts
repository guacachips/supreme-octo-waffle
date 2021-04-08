import { Meta, Story } from '@storybook/angular';
import { SwoSiteBarComponent } from 'projects/ngx-sow-library/src/public-api';


// This default export determines where the story goes in the story list
export default {
    title: 'Library/SiteBar',
    component: SwoSiteBarComponent
} as Meta;

// We create a “template” of how args map to rendering
const Template: Story<SwoSiteBarComponent> = (args) => ({
    props: args
});

export const DefaultSiteBar = Template.bind({});
DefaultSiteBar.args = {};
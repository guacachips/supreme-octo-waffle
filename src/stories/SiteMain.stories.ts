import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CardComponent, SwoSiteMainComponent } from 'projects/ngx-sow-library/src/public-api';


// This default export determines where the story goes in the story list
export default {
  title: 'Library/SiteMain',
  component: SwoSiteMainComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent]
    })
  ]
} as Meta;

// We create a “template” of how args map to rendering
const Template: Story<SwoSiteMainComponent> = (args) => ({
  props: args
});

export const DefaultSiteMain = Template.bind({});
DefaultSiteMain.args = {};
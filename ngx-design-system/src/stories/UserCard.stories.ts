import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { UserCardComponent } from 'projects/lib-components/src/public-api';
import { CardComponent, ChipComponent, TitleComponent, SubtitleComponent } from 'projects/lib-elements/src/public-api';


// This default export determines where the story goes in the story list
export default {
    title: 'Components/UserCardComponent',
    component: UserCardComponent,
    decorators: [
        moduleMetadata({
          declarations: [
            CardComponent,
            SubtitleComponent,
            TitleComponent,
            ChipComponent
          ]
        })
      ]
} as Meta;

// We create a “template” of how args map to rendering
const Template: Story<UserCardComponent> = (args) => ({
    props: args
});

export const DefaultCard = Template.bind({});
DefaultCard.args = {};

export const BrendanEich = Template.bind({});
BrendanEich.args = {
    picture: 'https://bit.ly/3cYrq6a',
    name: 'Brendan EICH',
    description: 'Créateur de JavaScript',
    skills: [
      'Compétence 1',
      'Compétence 2',
    ]
};
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DBDrawerCollapsedLayout, { IDBDrawerCollapsedLayout } from './DBDrawerCollapsedLayout';
import { DBDrawerCollapsedLayoutProps } from './DBDrawerCollapsedLayout.mocks';

export default {
    title: 'layouts/dashboard/DBDrawerCollapsedLayout',
    component: DBDrawerCollapsedLayout,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DBDrawerCollapsedLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DBDrawerCollapsedLayout> = (args) => (
    <DBDrawerCollapsedLayout {...args} />
);

export const SLandingAppBar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

SLandingAppBar.args = {
    ...DBDrawerCollapsedLayoutProps.base,
} as IDBDrawerCollapsedLayout;
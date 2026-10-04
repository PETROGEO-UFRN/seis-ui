import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { SimpleTreeView } from '@mui/x-tree-view';
import { TreeItem } from '@mui/x-tree-view';

import TreeItemLabelWithActions from './';

type Story = StoryObj<typeof TreeItemLabelWithActions>;

import type { IconButtonProps } from "@mui/material/IconButton";

// *** Default story to show update option in action ***
interface ITreeItemLabelWithActionsStory {
  labelText?: string
  onUpdate?: undefined | (() => void)
  actionsColor?: IconButtonProps["color"]
}

function TreeItemLabelWithActionsStory({
  labelText = "Label",
  onUpdate = undefined,
  actionsColor,
}: ITreeItemLabelWithActionsStory) {
  return (
    <TreeItemLabelWithActions
      labelText={labelText}
      onRemove={() => action('Clicked delete!')}
      onUpdate={onUpdate}
      actionsColor={actionsColor}
    />
  )
}
// ***

const meta: Meta<typeof TreeItemLabelWithActions> = {
  title: 'Components/TreeItemLabelWithActions',
  component: TreeItemLabelWithActions,
  argTypes: {
    actionsColor: {
      control: 'select',
      options: ['inherit', 'default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    labelText: 'Label',
    onRemove: () => action('Clicked delete!'),
  },
  parameters: {
    isSmallBox: true,
  },
};

export const WithUpdate: Story = {
  args: {
    labelText: 'Label',
    onRemove: () => action('Clicked delete!'),
    onUpdate: () => action('Clicked update!'),
  },
  parameters: {
    isSmallBox: true,
  },
};

export const WithHref: Story = {
  args: {
    labelText: 'Label',
    href: 'https://example.com',
    onRemove: () => action('Clicked delete!'),
  },
  parameters: {
    isSmallBox: true,
  },
};

export const WithExtraActions: Story = {
  args: {
    labelText: 'Label',
    onRemove: () => action('Clicked delete!'),
    onUpdate: () => action('Clicked update!'),
    ExtraActions: <button onClick={() => action('Clicked extra action!')}>Custom</button>,
  },
  parameters: {
    isSmallBox: true,
  },
};

export const OnTreeItemExamples: Story = {
  args: {
    labelText: 'Label',
    onRemove: () => action('Clicked delete!'),
  },
  parameters: {
    isSmallBox: true,
  },
  decorators: [
    (Story) => (
      <SimpleTreeView>
        <TreeItem
          itemId="1"
          label={<Story />}
        >
          <TreeItem
            itemId="2"
            label={<Story />}
          />
          <TreeItem
            itemId="3"
            label={<Story />}
          />
        </TreeItem>
      </SimpleTreeView>
    ),
  ],
}

export const OnTreeItemExamplesWithUpdate: Story = {
  parameters: {
    isSmallBox: true,
  },
  decorators: [
    (Story, { args }) => (
      <SimpleTreeView>
        <TreeItem
          itemId="1"
          label={
            <TreeItemLabelWithActionsStory
              labelText='Label 1'
              onUpdate={() => action('Clicked update!')}
              actionsColor={args.actionsColor}
            />
          }
        >
          <TreeItem
            itemId="2"
            label={
              <TreeItemLabelWithActionsStory
                labelText='Label 2'
                onUpdate={() => action('Clicked update!')}
                actionsColor={args.actionsColor}
              />
            }
          />
          <TreeItem
            itemId="3"
            label={
              <TreeItemLabelWithActionsStory
                labelText='Label 3'
                onUpdate={() => action('Clicked update!')}
                actionsColor={args.actionsColor}
              />
            }
          />
        </TreeItem>
      </SimpleTreeView>
    ),
  ],
};

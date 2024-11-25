import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { training } from './Training.jsx';

const meta: Meta<typeof training> = {
    component: training,
};

export default meta;

type Story = StoryObj<typeof training>;

export const Basic: Story = { args: {} };

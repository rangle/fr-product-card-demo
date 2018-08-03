import React from 'react';
import { storiesOf } from '@storybook/react';

import WithHtmlVariant from '../WithHtmlVariant';
import { Tag } from '../../ui-kit';

storiesOf('Components|Tag', module)
  .add('new', () => (
    <WithHtmlVariant>
      <Tag>New</Tag>
    </WithHtmlVariant>
  ))
  .add('sale', () => (
    <WithHtmlVariant>
      <Tag>Sale</Tag>
    </WithHtmlVariant>
  ));

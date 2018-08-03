import React from 'react';
import { storiesOf } from '@storybook/react';

import WithHtmlVariant from '../WithHtmlVariant';
import { Favourite } from '../../ui-kit';

storiesOf('Components|Favourite', module)
  .add('not favourited', () => (
    <WithHtmlVariant>
      <Favourite isFav={false} />
    </WithHtmlVariant>
  ))
  .add('favourited', () => (
    <WithHtmlVariant>
      <Favourite isFav />
    </WithHtmlVariant>
  ));

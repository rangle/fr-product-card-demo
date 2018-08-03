import React from 'react';
import { storiesOf } from '@storybook/react';

import WithHtmlVariant from '../WithHtmlVariant';
import { ImageCard, Text } from '../../ui-kit';

storiesOf('Components|ImageCard', module)
  .add('with ratio', () => (
    <WithHtmlVariant>
      <ImageCard
        className="max-w-sm"
        src="https://source.unsplash.com/random/?succulent"
        ratio={4 / 3}
      />
    </WithHtmlVariant>
  ))
  .add('with overlay content', () => (
    <WithHtmlVariant>
      <ImageCard
        className="max-w-xs"
        src="https://source.unsplash.com/random/?succulent"
        ratio={3 / 4}
        tl={<Text className="text-white p-3 text-5">Top Left</Text>}
        tr={<Text className="text-white p-3 text-5">Top Right</Text>}
        br={<Text className="text-white p-3 text-5">Bottom Right</Text>}
        bl={<Text className="text-white p-3 text-5">Bottom Left</Text>}
      />
    </WithHtmlVariant>
  ));

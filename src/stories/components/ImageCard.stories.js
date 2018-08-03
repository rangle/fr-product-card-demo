import React from 'react';
import { storiesOf } from '@storybook/react';

import WithHtmlVariant from '../WithHtmlVariant';
import { ImageCard, Text } from '../../ui-kit';
import imageCard from '!file-loader!../image-card.svg';

storiesOf('Components|ImageCard', module)
  .add('explanation', () => (
    <div className="p-4 max-w-md">
      <img
        className="max-w-sm"
        src={imageCard}
        alt="image card can have content placed in 4 quadrants, layered on top of the image"
      />
      <p className="leading-copy mt-5">
        It consists of a <code>&#x3C;BackgroundImage /&#x3E;</code> component
        and containers for content that can be absolutely positioned on top of
        it. All wrapped in a <code>&#x3C;Box /&#x3E;</code>.
      </p>
    </div>
  ))
  .add('with ratio', () => (
    <WithHtmlVariant>
      <ImageCard
        className="max-w-sm"
        src="https://source.unsplash.com/8mqOw4DBBSg/1600x900"
        ratio={4 / 3}
      />
    </WithHtmlVariant>
  ))
  .add('with overlay content', () => (
    <WithHtmlVariant>
      <ImageCard
        className="max-w-xs"
        src="https://source.unsplash.com/8mqOw4DBBSg/1600x900"
        ratio={3 / 4}
        tl={<Text className="text-white p-3 text-5">Top Left</Text>}
        tr={<Text className="text-white p-3 text-5">Top Right</Text>}
        br={<Text className="text-white p-3 text-5">Bottom Right</Text>}
        bl={<Text className="text-white p-3 text-5">Bottom Left</Text>}
      />
    </WithHtmlVariant>
  ));

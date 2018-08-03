import React from 'react';
import { storiesOf } from '@storybook/react';

import { Text, Strikethrough } from '../../ui-kit';

storiesOf('Primitives|Text', module)
  .add('Type Scale', () => (
    <div className="m-3">
      <Text className="text-1 mb-4">
        A modular scale, like a musical scale, is a prearranged set of
        harmonious proportions.
      </Text>
      <Text className="text-2 mb-4">
        A modular scale, like a musical scale, is a prearranged set of
        harmonious proportions.
      </Text>
      <Text className="text-3 mb-4">
        A modular scale, like a musical scale, is a prearranged set of
        harmonious proportions.
      </Text>
      <Text className="text-4 mb-4">
        A modular scale, like a musical scale, is a prearranged set of
        harmonious proportions.
      </Text>
      <Text className="text-5 mb-4">
        A modular scale, like a musical scale, is a prearranged set of
        harmonious proportions.
      </Text>
      <Text className="text-6 mb-4">
        A modular scale, like a musical scale, is a prearranged set of
        harmonious proportions.
      </Text>
    </div>
  ))
  .add('Change the underlying HTML element', () => (
    <div className="m-3 max-w-sm">
      <Text className="text-5 mb-3">
        The tech giant says it is ready to begin planning a quantum computer, a
        powerful cpu machine that relies on subatomic particles instead of
        transistors.
      </Text>
      <Text className="leading-solid mv-0">
        <Text is="span" className="text-6 text-gray uppercase leading-solid">
          By KATHERINE GRANT
        </Text>{' '}
        <Text is="time" className="text-6 text-gray block leading-solid">
          Nov. 19, 2016
        </Text>
      </Text>
    </div>
  ))
  .add('strikethrough', () => (
    <div className="m-3 max-w-sm">
      <Text className="text-5 mb-3">
        Today's Special: Salmon
        <br />
        <Strikethrough>$10.99</Strikethrough> $6.99
      </Text>
    </div>
  ));

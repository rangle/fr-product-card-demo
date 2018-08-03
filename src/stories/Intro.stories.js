import React from 'react';
import { storiesOf } from '@storybook/react';

import variations from '!file-loader!./variations.svg';
import card from '!file-loader!./card.png';

storiesOf('Intro', module).add('welcome', () => (
  <div className="text-dark-gray p-5">
    <h1 className="mb-4">Product Card</h1>
    <p className="max-w-md leading-copy">
      Product cards which display various combinations of: sale price, regular
      price, ratings, categories & tags. e.g.: Aldo product card but, would be
      nice to use something Uniqlo specific.
    </p>
    <div className="flex items-center mt-4 mb-5">
      <img className="max-w-xs" src={card} />
      <img
        className="flex-1"
        src={variations}
        alt="variations of the product card"
      />
    </div>

    <h2 className="mb-3">Tailwind</h2>
    <p className="max-w-md leading-copy mb-3">
      Tailwind is a utility-first CSS framework for rapidly building custom user
      interfaces. It allows us to extract utility patterns with{' '}
      <code>@apply</code>
    </p>
    <p className="max-w-md leading-copy mb-5">
      <a className="text-blue" href="https://tailwindcss.com/docs/overflow">
        tailwindcss.com
      </a>
    </p>
    <a href="https://tachyons-tldr.now.sh">
      <img
        className="max-w-md p-2 border border-moon-gray rounded"
        src="https://winkervsbecks.github.io/programming-design-systems-workshop/static/media/tachyons-design-system.999fc3a4.gif"
      />
    </a>
  </div>
));

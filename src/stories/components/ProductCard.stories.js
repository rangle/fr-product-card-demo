import React from 'react';
import { storiesOf } from '@storybook/react';

import WithHtmlVariant from '../WithHtmlVariant';
import { ProductCard, FeaturedProductCard, LookCard } from '../../ui-kit';
import shoes from '../shoes';

storiesOf('Product Cards|ProductCard', module)
  .add('default', () => (
    <WithHtmlVariant>
      <div className="max-w-xs">
        <ProductCard
          key={shoes[2].id}
          shoe={shoes[2]}
          style={{
            gridColumnEnd: shoes[2].id === 1 ? 'span 2' : 'span 1',
            gridRowEnd: shoes[2].id === 1 ? 'span 2' : 'span 1',
          }}
        />
      </div>
    </WithHtmlVariant>
  ))
  .add('on a grid', () => (
    <WithHtmlVariant>
      <div className="py-3 flex flex-wrap">
        {shoes.map(shoe => (
          <ProductCard className="w-1/4 mr-3 mb-3" key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </WithHtmlVariant>
  ))
  .add('on a grid with different sizes', () => (
    <WithHtmlVariant>
      <div
        className="py-3"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 256px)',
          gridAutoRows: '325.26582272px',
          gridGap: '1rem',
          gridAutoFlow: 'dense',
        }}
      >
        {shoes.map(shoe => (
          <ProductCard
            key={shoe.id}
            shoe={shoe}
            style={{
              gridColumnEnd: shoe.id === 0 ? 'span 2' : 'span 1',
              gridRowEnd: shoe.id === 0 ? 'span 2' : 'span 1',
            }}
          />
        ))}
      </div>
    </WithHtmlVariant>
  ))
  .add('on a grid with a featured product', () => (
    <WithHtmlVariant>
      <div
        className="py-3"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 256px)',
          gridAutoRows: '325.26582272px',
          gridGap: '1rem',
          gridAutoFlow: 'dense',
        }}
      >
        {shoes.map(
          shoe =>
            shoe.id === 1 ? (
              <FeaturedProductCard
                key={shoe.id}
                shoe={shoe}
                style={{
                  gridColumnEnd: 'span 2',
                  gridRowEnd: 'span 2',
                }}
              />
            ) : (
              <ProductCard
                key={shoe.id}
                shoe={shoe}
                style={{
                  gridColumnEnd: 'span 1',
                  gridRowEnd: 'span 1',
                }}
              />
            ),
        )}
      </div>
    </WithHtmlVariant>
  ))
  .add('look card', () => (
    <WithHtmlVariant>
      <div className="py-3 flex flex-wrap">
        <LookCard
          className="w-1/3 mr-3 mb-5"
          image="//d28m5bx785ox17.cloudfront.net/v1/img/yQHpkvrYP22VJKnljh7sq-e8l9FcAqISz5lr-iO042s=/sc/1080x1080?spatialTags=0.325884:0.524274"
          name="@freddievalencia"
          likes={62}
        />
        <LookCard
          className="w-1/3 mr-3 mb-5"
          image="//d28m5bx785ox17.cloudfront.net/v1/img/uRRrBg_JRjFkLxYOQ_MDvk3SQ1pEVN4TumH3l2WEuGU=/sc/1080x1080?spatialTags=0.475770:0.799349,0.481781:0.159919"
          name="@aldo_shoes"
          likes={9180}
        />
        <LookCard
          className="w-1/3 mr-3 mb-5"
          image="//d28m5bx785ox17.cloudfront.net/v1/img/WDqULu_k2qU3I1eEB8Uwif1f_kfDFtY5R5Zt9xL4HTc=/sc/1080x1080?spatialTags=0.535354:0.930958"
          name="@priscillaventurablog"
          likes={3689}
        />
      </div>
    </WithHtmlVariant>
  ));

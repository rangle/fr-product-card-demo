import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { docco } from 'react-syntax-highlighter/styles/prism';
import prettier from 'prettier/standalone';

const plugins = [require('prettier/parser-babylon')];

export default ({ children }) => {
  const markup = renderToStaticMarkup(children);

  return (
    <div className="m-3">
      <h3 className="text-dark-gray mb-3 text-6 tracking-wide uppercase">
        React Component
      </h3>
      {children}
      <h3 className="text-dark-gray mt-6 mb-3 text-6 tracking-wide uppercase">
        HTML
      </h3>
      <div
        dangerouslySetInnerHTML={{
          __html: markup,
        }}
      />
      <SyntaxHighlighter language="javascript" style={docco}>
        {prettier.format(markup, {
          parser: 'babylon',
          plugins,
        })}
      </SyntaxHighlighter>
    </div>
  );
};

import createMapper from 'system-classnames';

export const map = createMapper({
  breakpoints: [null, 'sm', 'md', 'lg', 'xl'],
  props: [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'text',
    'bg',
  ],
  getter: ({ breakpoint, prop, value }) => {
    const rule = [prop, value].join('-');
    return breakpoint ? [breakpoint, rule].join(':') : rule;
  },
});

export const withClassName = (name, { className = '', ...props }) => ({
  className: `${name} ${className}`,
  ...props,
});

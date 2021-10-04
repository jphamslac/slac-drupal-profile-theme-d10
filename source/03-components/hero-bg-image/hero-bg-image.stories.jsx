import React from 'react';

import twigTemplate from './hero-bg-image.twig';
import data from './hero-bg-image.yml';
import './hero-bg-image.scss';

const settings = {
  title: 'Components/Hero/Hero with Background Image',
};

const Default = args => (
  <div
    dangerouslySetInnerHTML={{
      __html: twigTemplate({
        ...args,
      }),
    }}
  />
);
Default.args = { ...data };

const Left = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: twigTemplate({
        ...data,
        modifier_classes: 'hero-bg-image--left',
      }),
    }}
  />
);

const Right = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: twigTemplate({
        ...data,
        modifier_classes: 'hero-bg-image--right',
      }),
    }}
  />
);

export default settings;
export { Default, Left, Right };
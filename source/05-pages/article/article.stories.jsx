import React from 'react';

import twigTemplate from './article.twig';
import globalData from '../../00-config/storybook.global-data.yml';
import data from './article.yml';

const settings = {
  title: 'Pages/Article',
};

const Article = args => (
  <div
    dangerouslySetInnerHTML={{
      __html: twigTemplate({
        ...args,
      }),
    }}
  />
);
Article.args = { ...globalData, ...data };

export default settings;
export { Article };
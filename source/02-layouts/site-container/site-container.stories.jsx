import React from 'react'
import ReactDOMServer from 'react-dom/server';
import parse from 'html-react-parser';

import twigTemplate from './site-container.twig';
import data from './site-container.yml';
import ContentPlaceholder from '../../01-global/content-placeholder/content-placeholder';

const settings = {
  title: 'Layouts/Site Container',
  decorators: [
    (Story, {args}) =>
      <Story args={{
        ...args,
        site_container_content: ReactDOMServer.renderToStaticMarkup(
          <ContentPlaceholder>Site Container Layout Content</ContentPlaceholder>
        )
      }} />
  ],
};

const SiteContainer = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
SiteContainer.args = { ...data };

export default settings;
export { SiteContainer };

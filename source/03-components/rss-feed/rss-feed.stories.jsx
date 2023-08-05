import parse from 'html-react-parser';

import twigTemplate from './rss-feed.twig';
import globalData from '../../00-config/storybook.global-data.yml';
import data from './rss-feed.yml';
import './rss-feed.scss';
// Importing IconLink to ensure its CSS/JS gets loaded in Storybook when this
// story is referenced.
import { IconLink } from '../icon-link/icon-link.stories.jsx';

const settings = {
  title: 'Components/RSS Feed',
  parameters: {
    controls: {
      include: ['link_text'],
    },
  },
};

const RSSFeed = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
RSSFeed.args = { ...globalData, ...data };

export default settings;
export { RSSFeed };

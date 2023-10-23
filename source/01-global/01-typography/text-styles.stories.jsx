import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './text-styles.twig';
import data from '../../00-config/config.design-tokens.yml';
import './text-styles.scss';

const settings = {
  title: 'Global/Typography/Text Styles',
  decorators: [withGlobalWrapper],
  argTypes: {
    gesso: {
      table: {
        disable: true,
      },
    },
  },
};

const TextStyles = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
TextStyles.args = { ...data };

export default settings;
export { TextStyles };

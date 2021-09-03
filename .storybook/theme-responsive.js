import { create } from '@storybook/theming';
import '!style-loader!css-loader!sass-loader!./theme-responsive.scss';

export default create({
  base: 'light',
  colorSecondary: '#609',
  brandTitle: 'Design System Name',
  brandUrl: 'http://ds.com.br',
  brandImage: '',
});



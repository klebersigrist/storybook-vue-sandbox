import { configure, addParameters } from '@storybook/vue';
import themeResponsive from './theme-responsive';

addParameters({
  docs: {
    theme: themeResponsive,
  },
});

const loaderFn = () => ([
  require('../stories/welcome.stories'),
  require('../stories/responsive/buttons/button.stories'),
]);

configure(loaderFn, module);

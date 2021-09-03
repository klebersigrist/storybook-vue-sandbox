import Welcome from '../components/Welcome';

export default {
  title: 'Design System Name/Get started',
};

export const welcome = () => ({
  components: { Welcome },
  template: '<welcome />',
});

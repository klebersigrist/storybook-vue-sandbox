import { formatSnippetsInfo } from '../../.storybook/helpers';

const template = `
  <div class="story-page">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="story-title">ComponentName</h1>
          <p class="story-text--lead">ComponentName component.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <story/>
        </div>
      </div>
    </div>
  </div>
`;

const parameters = {
  info: {
    display: true,
    summary: '',
  },
};

export default {
  title: 'Components (Responsive)/Component-Folder/ComponentName',
};


export const withDefault = () => ({
  components: {},
  data: () => ({}),
  methods: {},
  template: `
    <div>
      ${defaultSnippet}
      <pre class="story-snippets">${formatSnippetsInfo(defaultSnippet)}</pre>
    </div>
  `,
});

const defaultSnippet = `
  <div class="add-your-class-here">
    Add your component here
  </div>
`;

withDefault.story = {
  name: 'default',
  decorators: [() => ({ template })],
  parameters,
};

import { formatSnippetsInfo } from '../../../.storybook/helpers';

const template = `
  <div class="story-page">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="story-title">Button</h1>
          <p class="story-text--lead">Button component with loading.</p>
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
  title: 'Components (Responsive)/Buttons/Button',
};

export const primary = () => ({
  components: {},
  data: () => ({
    loading: false,
  }),
  methods: {},
  template: `
    <div>
      ${primarySnippet}
      <pre class="story-snippets">${formatSnippetsInfo(primarySnippet)}</pre>
    </div>
  `,
});

const defaultSnippet = `
  <div class="add-your-class-here">
    Add your component here
  </div>
`;

const primarySnippet = `
  <div>
  ${defaultSnippet}
  <pre class="story-snippets">${formatSnippetsInfo(defaultSnippet)}</pre>
  </div>
`;

primary.story = {
  name: 'primary',
  decorators: [() => ({ template })],
  parameters,
};


export const primarySmall = () => ({
  components: {},
  data: () => ({
    loading: false,
  }),
  methods: {},
  template: `
    <div>
      ${primarySmallSnippet}
      <pre class="story-snippets">${formatSnippetsInfo(primarySmallSnippet)}</pre>
    </div>
  `,
});

const primarySmallSnippet = `
  <div class="add-your-class-here">
    Add your component here
  </div>
`;

primarySmall.story = {
  name: 'primary small',
  decorators: [() => ({ template })],
  parameters,
};

export const primaryWithBorder = () => ({
  components: {},
  data: () => ({
    loading: false,
  }),
  methods: {},
  template: `
    <div>
      <div class="story-card">
        <div class="story-card-content--align">
          ${primaryWithBorderSnippet}
        </div>
      </div>
      <pre class="story-snippets">${formatSnippetsInfo(primaryWithBorderSnippet)}</pre>
    </div>
  `,
});

const primaryWithBorderSnippet = `
  <div class="add-your-class-here">
    Add your component here
  </div>
`;

primaryWithBorder.story = {
  name: 'primary border',
  decorators: [() => ({ template })],
  parameters,
};


export const secondary = () => ({
  components: {},
  data: () => ({
    loading: false,
  }),
  methods: {},
  template: `
    <div>
      ${secondarySnippet}
      <pre class="story-snippets">${formatSnippetsInfo(secondarySnippet)}</pre>
    </div>
  `,
});

const secondarySnippet = `
  <div class="add-your-class-here">
    Add your component here
  </div>
`;

secondary.story = {
  name: 'secondary',
  decorators: [() => ({ template })],
  parameters,
};


export const secondarySmall = () => ({
  components: {},
  data: () => ({
    loading: false,
  }),
  methods: {},
  template: `
    <div>
      ${secondarySmallSnippet}
      <pre class="story-snippets">${formatSnippetsInfo(secondarySmallSnippet)}</pre>
    </div>
  `,
});

const secondarySmallSnippet = `
  <div class="add-your-class-here">
    Add your component here
  </div>
`;

secondarySmall.story = {
  name: 'secondary small',
  decorators: [() => ({ template })],
  parameters,
};

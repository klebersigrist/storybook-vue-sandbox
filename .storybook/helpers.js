export const formatSnippetsInfo = (html) => {
  return html
    .trim()
    .replace(/</g, '&lt')
    .replace(/>/g, '&gt')
    .replace(/\n\s\s/g, '<br>');
}

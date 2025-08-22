export const switchTheme = () => {
  const currentTheme = document.body.dataset.theme;

  document.body.dataset.theme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', document.body.dataset.theme);
};

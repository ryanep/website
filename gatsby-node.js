exports.onCreatePage = async ({ page, actions }) => {
  const { deletePage, createPage } = actions;
  if (page.componentPath === `${__dirname}/src/pages/home/index.tsx`) {
    deletePage(page);
    createPage({
      ...page,
      path: '/'
    });
  }
};

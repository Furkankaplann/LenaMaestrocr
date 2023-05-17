const blogPostService = {
  getBlogPosts: page => {
    return fetch(
      'https://www.lenasoftware.com/api/v1/en/maestro/1?page=' +
        page +
        '&count=10',
    );
  },
};
export default blogPostService;

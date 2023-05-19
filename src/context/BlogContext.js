import React, {createContext, useEffect, useState} from 'react';
import blogPostService from '../services/blogPostService';

export const BlogContext = createContext();

export const BlogProvider = ({children}) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchBlogPosts = async pageNum => {
    setLoading(true);
    try {
      const response = await blogPostService.getBlogPosts(pageNum);
      const json = await response.json();
      if (refreshing) {
        setBlogPosts(json.result);
        setRefreshing(false);
      } else {
        setBlogPosts([...blogPosts, ...json.result]);
      }

      setLoading(false);
    } catch (error) {
      setError('An error occured while fetching data...');
      setLoading(false);
    }
  };

  const refreshBlogPosts = () => {
    console.log('pull to refresh');
    setRefreshing(true); 
    setPage(page + 1);
  };

  const loadMoreBlogPosts = () => {
    console.log('loadmore to refresh');
    if (!loading) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    fetchBlogPosts(page);
  }, [page]);

  return (
    <BlogContext.Provider
      value={{
        blogPosts,
        loading,
        refreshing,
        error,
        refreshBlogPosts,
        loadMoreBlogPosts,
      }}>
      {children}
    </BlogContext.Provider>
  );
};

import React from 'react';
import {StyleSheet} from 'react-native';

const BlogListScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  summary: {
    fontSize: 16,
    marginTop: 5,
  },
  readingTime: {
    fontSize: 12,
    marginTop: 5,
    color: 'grey',
    textAlign: 'right',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  card: {
    flex: 1,
    padding: 12,
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 12,
  },
});

export default BlogListScreenStyle;

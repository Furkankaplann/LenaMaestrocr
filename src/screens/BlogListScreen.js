import React, {useContext} from 'react';
import {
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BlogContext} from '../context/BlogContext';
import blogListScreenStyle from '../styles/blogListScreenStyle';
import BlogListScreenStyle from '../styles/blogListScreenStyle';

const BlogListScreen = () => {
  const {
    blogPosts,
    loading,
    refreshing,
    error,
    refreshBlogPosts,
    loadMoreBlogPosts,
  } = useContext(BlogContext);
  const navigation = useNavigation();
  const handleScrollEnd = () => {
    loadMoreBlogPosts();
  };

  const renderBlogPost = ({item}) => {
    return (
      <TouchableOpacity
        style={blogListScreenStyle.card}
        onPress={() =>
          navigation.navigate('BlogDetail', {content: item.content})
        }>
        <Image source={{uri: item.banner}} style={blogListScreenStyle.image} />
        <Text style={blogListScreenStyle.title}>{item.title}</Text>
        <Text style={blogListScreenStyle.summary}>{item.summary}</Text>
        <Text style={blogListScreenStyle.readingTime}>
          {item.totalReadingTime} minute
        </Text>
      </TouchableOpacity>
    );
  };

  if (loading && !refreshing && (!blogPosts || blogPosts.length === 0)) {
    return <ActivityIndicator style={{flex: 1}} />;
  }

  if (error) {
    return <Text style={BlogListScreenStyle.error}>An error occurred: {error}</Text>;
  }

  return (
    <SafeAreaView style={{flex: 1}} onScrollEndDrag={handleScrollEnd}>
      <FlatList
        data={blogPosts}
        keyExtractor={item => item.postId.toString()}
        renderItem={renderBlogPost}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refreshBlogPosts}
          />
        }
        onEndReached={handleScrollEnd} 
        onEndReachedThreshold={0.5}
        contentContainerStyle={{justifyContent: 'center'}}
      />
    </SafeAreaView>
  );
};
export default BlogListScreen;

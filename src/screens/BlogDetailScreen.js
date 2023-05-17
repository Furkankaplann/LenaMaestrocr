import React, {useContext} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {BlogContext} from '../context/BlogContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import blogDetailScreenStyle from '../styles/blogDetailScreenStyle';

const BlogDetailsScreen = ({route}) => {
  const content = route.params.content;
  const {loading} = useContext(BlogContext);

  if (loading) {
    return (
      <View style={blogDetailScreenStyle.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={blogDetailScreenStyle.container}>
        <ScrollView contentContainerStyle={blogDetailScreenStyle.scrollContent}>
          <View style={blogDetailScreenStyle.content}>
            <RenderHtml contentWidth={300} source={{html: content}} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default BlogDetailsScreen;

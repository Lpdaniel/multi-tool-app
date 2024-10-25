import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';

const NewsScreen = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://kinsta.com/wp-json/wp/v2/posts');
        const articles = response.data.slice(0, 3); 
        setNews(articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {news.map((article, index) => (
        <View key={index} style={styles.article}>
          <Text style={styles.title}>{article.title.rendered}</Text>
          <Text style={styles.summary}>{article.excerpt.rendered.replace(/<[^>]+>/g, '')}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(article.link)}>
            <Text style={styles.link}>Read More</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  article: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  summary: {
    fontSize: 14,
    color: '#333',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
});

export default NewsScreen;

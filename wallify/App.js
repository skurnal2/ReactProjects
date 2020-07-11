import React from 'react';
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  ImageBackground,
  View,
  TouchableOpacity
} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 1,
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true }, this.getData);
    //this.getData() - Was showing 2 times
  }

  getData = async () => {
    const url = 'https://picsum.photos/v2/list?limit=10&page=' + this.state.page;
    fetch(url).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: this.state.data.concat(responseJson),
          isLoading: false
        })
      })
  }

  renderRow = ({ item }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity>
          <ImageBackground
            source={{ uri: item.download_url }}
            style={styles.itemImage}>
            <Text style={styles.itemText}>{item.author}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    )
  }

  handleLoadMore = () => {
    this.setState(
      { page: this.state.page + 1, isLoading: true },
      this.getData
    );
  }

  renderFooter = () => {
    return (
      this.state.isLoading ?
        <View style={styles.loader}>
          <ActivityIndicator color="#FFF" size="large" />
          <Text>Wait!</Text>
        </View>
        : null

    );
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.data}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={0.7}
        ListFooterComponent={this.renderFooter}

      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  loader: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  item: {
    marginBottom: 5,
  },
  itemImage: {
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    margin: 15,
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#ebf7ff",
  },
  itemText: {
    fontSize: 10,
    padding: 4,
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
    margin: 5,
    left: 0,
    color: "white",
    backgroundColor: "#000",
    opacity: .5,
  }
});
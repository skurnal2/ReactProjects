import React from 'react';
import { StyleSheet, FlatList, Text, Image, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [1, 2, 3]
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10';
        fetch(url).then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            data: responseJson
          })
        })

        console.log(this.state.data);
  }

  renderRow = ({item}) => {
    return (
      <View style={styles.item}>
        <Image style={styles.itemImage}/>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    )
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.data}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  item: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  itemImage: {
    width: '100%',
    height: 280,
    resizeMode: 'cover'
  },
  itemText: {
    fontSize: 25,
    padding: 5
  }
});
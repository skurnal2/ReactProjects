import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import colors from './Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import tempData from './tempData';
import TodoList from './components/TodoList';
import AddListModal from './components/AddListModal';

class App extends React.Component {
  state = {
    addTodoVisible: false
  };

  toggleAddTodoModal() {
    this.setState({addTodoVisible: !this.state.addTodoVisible});
  }

  renderList = list => {
    return <TodoList list={list} />
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.state.addTodoVisible}
          onRequestClose={() => this.toggleAddTodoModal()} //On Request Close will execute when user presses back button
          >             
          <AddListModal closeModal={() => this.toggleAddTodoModal()} />
        </Modal>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Todo
            <Text style={{fontWeight: 'bold', color: colors.blue}}>
              Tornado
            </Text>
          </Text>
          <View style={styles.divider} />
        </View>
        <View style={{marginVertical: 48}}>
          <TouchableOpacity
            style={styles.addList}
            onPress={() => this.toggleAddTodoModal()}>
            <AntDesign name="plus" size={16} color={colors.blue} />
          </TouchableOpacity>
          <Text style={styles.add}>Add List</Text>
        </View>
        <View style={{height: 275, paddingLeft: 32}}>
          <FlatList
            data={tempData}
            keyExtractor={(item) => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => this.renderList(item)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: colors.lightblue,
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'normal',
    color: colors.black,
    paddingHorizontal: 30,
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightblue,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 8,
  },
});

export default App;
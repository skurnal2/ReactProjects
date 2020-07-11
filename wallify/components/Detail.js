import React from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
} from 'react-native';

class List extends React.Component {
    constructor() {
        super();
    }
   

    render() {     
        const item = this.props.route.params.item;

        return (
            <View>
            <ImageBackground
                source={{ uri: item.download_url }}
                style={styles.itemImage}>
                <Text style={styles.itemText}>{item.author}</Text>
            </ImageBackground>
            <Text>{this.props.route.author}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemImage: {
       height: "100%",
       width: "100%",
       position: "relative",
    },
    itemText: {
        position: "absolute",
        bottom: 25,
        left: 15,
        color: "white",
        backgroundColor: "#000",
        opacity: .7,
        fontSize: 20,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 60
    },
});

export default List;
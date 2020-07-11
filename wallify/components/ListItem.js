import React from 'react';
import {
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Text,
    ImageBackground,
    View,
    TouchableWithoutFeedback,
    Animated
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

class ListItem extends React.Component {

    state = {

    }

    animate() {
        Animated.timing()
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.animate()}>
                <LinearGradient
                    colors={["#ebf7ff", "#8d9499", "#ebf7ff"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.gradient}>
                    <ImageBackground
                        source={{ uri: item.download_url }}
                        style={styles.itemImage}>
                        <Text style={styles.itemText}>{item.author}</Text>
                    </ImageBackground>
                </LinearGradient>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    itemImage: {
        height: "100%",
        width: "100%",
        resizeMode: 'cover',
        borderRadius: 10,
        overflow: "hidden",
        position: "absolute",
        top: 0,
        backgroundColor: "transparent"
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
    },
    gradient: {
        height: 200,
        margin: 15,
        borderRadius: 10,
        position: "relative"
    }
});

export default ListItem;
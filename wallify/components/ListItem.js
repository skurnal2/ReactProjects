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

export class ListItem extends React.Component {

    state = {
        animatePress: new Animated.Value(1)
    }

    animateIn() {
        Animated.timing(this.state.animatePress, {
            toValue: 0.85,
            duration: 150,
            useNativeDriver: true,
        }).start()
    }

    animateOut() {
        Animated.timing(this.state.animatePress, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start()
    }

    render() {
        return (
            <TouchableWithoutFeedback
            
                onPressIn={() => this.animateIn()}
                onPressOut={() => this.animateOut()}
            >
                <Animated.View style={[styles.parentView, {
                    transform: [{scale: this.state.animatePress}]
                }]}
                
                >
                {/* <LinearGradient
                    colors={["#ebf7ff", "#8d9499", "#ebf7ff"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.gradient}
                 > */}
                    <ImageBackground
                        source={{ uri: this.props.item.download_url }}
                        style={styles.itemImage}>
                        <Text style={styles.itemText}>{this.props.item.author}</Text>
                    </ImageBackground>
                {/* </LinearGradient> */}
                </Animated.View>
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
        backgroundColor: "#636363"
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
        borderRadius: 10,
        height: "100%",
        width: "100%",
        position: "absolute"
    },
    parentView: {
        position: "relative",
        height: 200,
        margin: 15,
        borderRadius: 10,
        
    }
});

export default ListItem;
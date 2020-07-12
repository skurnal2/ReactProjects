import React from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    TouchableOpacity,    
} from 'react-native';
import { colorsFromUrl } from 'react-native-dominant-color';


class List extends React.Component {
    constructor() {
        super();

        this.state = {
            color: '#fff',
            image: null
        }

    }

    componentDidMount() {
        let imgUrl = this.props.route.params.item.download_url;
        this.state.image = imgUrl;
        colorsFromUrl(imgUrl, (err, colors) => {
            if (!err) {
                this.setState({ color: colors.averageColor });
            }
        });
    }

    setWallify = () => {
        console.log('hello');
    }

    render() {
        const item = this.props.route.params.item;

        return (
            <View>
                <ImageBackground
                    source={{ uri: item.download_url }}
                    style={styles.itemImage}>
                    <View style={[
                        styles.onImage,
                        {
                            borderStartWidth: 2,
                            borderBottomWidth: 2,
                            borderColor: this.state.color
                        }
                    ]}>
                        <Text style={styles.itemText}>{item.author}</Text>
                        <TouchableOpacity style={[styles.link,{backgroundColor: this.state.color}]}
                            onPress={() => this.setWallify}
                        >
                            <Text style={styles.linkText}>Set Wallpaper</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
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
    onImage: {
        position: "absolute",
        bottom: 25,
        left: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#000",
        opacity: .8,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 60
    },
    itemText: {
        color: "white",
        fontSize: 15,
    },
    link: {

        marginLeft: 15,
        padding: 10,
        borderRadius: 30,
        opacity: .7
    },
    linkText: {
        color: "white"
    }
});

export default List;
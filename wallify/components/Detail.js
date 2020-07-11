import React from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    TouchableOpacity
} from 'react-native';
import { colorsFromUrl } from 'react-native-dominant-color';

class List extends React.Component {
    constructor() {
        super();

        this.state = {
            color: '#fff'
        }
    }
   
    componentDidMount() {
        let imgUrl = this.props.route.params.item.download_url;
        colorsFromUrl(imgUrl, (err, colors) => {
            if(!err) {
                this.setState({ color: colors.averageColor });
            }
        });
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
                        borderWidth: 4,
                        borderColor: this.state.color
                    }
                ]}>
                 <Text style={styles.itemText}>{item.author}</Text>
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
        
        backgroundColor: "#000",
        opacity: .8,
        
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 60
    },
    itemText: {
        color: "white",
        fontSize: 20,
    }
});

export default List;
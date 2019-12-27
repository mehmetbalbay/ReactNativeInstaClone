import * as React from "react";
import { StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    image: {
        ...StyleSheet.absoluteFillObject,
        width: null,
        height: null,
    }
});

export default class Story extends React.Component {

    render() {
        let story = this.props.story
        
        return (
            <Image style={styles.image} source={story.source}  />
        );
    }
}
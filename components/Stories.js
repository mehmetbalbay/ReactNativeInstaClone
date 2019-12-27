import * as React from "react";
import { StyleSheet, View, ScrollView, Animated } from "react-native";
import Story from "./Story";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    }
});

export default class Stories extends React.Component {

    render() {
        let stories = this.props.stories


        return (
            <View style={styles.container}>
                {
                    <Animated.View>
                        {stories.map(story => <Story key={story.id} story={story}></Story>)}
                    </Animated.View>
                }
                <ScrollView
                    style={StyleSheet.absoluteFill}
                    contentContainerStyle={{ width: lineLenght * 2 }}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    bounces={false}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: { x },
                                },
                            },
                        ],
                        {useNativeDriver: true},
                    )}
                ></ScrollView>
            </View>);
    }
}
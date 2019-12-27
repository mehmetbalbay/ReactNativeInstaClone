import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { AppLoading } from 'expo';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Thumbnail } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Stories } from './components';

const StoryListData = [
  {
    id: '1',
    source: require('./assets/stories/1.jpg'),
    user: 'derek.russel',
    avatar: require('./assets/avatars/derek.russel.png')
  },
  {
    id: '2',
    source: require('./assets/stories/2.jpg'),
    user: 'jmitch',
    avatar: require('./assets/avatars/jmitch.png')
  },
  {
    id: '3',
    source: require('./assets/stories/3.jpg'),
    user: 'monicaa',
    avatar: require('./assets/avatars/monicaa.png')
  },
  {
    id: '4',
    source: require('./assets/stories/4.jpg'),
    user: 'alexandergarcia',
    avatar: require('./assets/avatars/alexandergarcia.png')
  },
  {
    id: '5',
    source: require('./assets/stories/5.jpg'),
    user: 'andrea.schmidt',
    avatar: require('./assets/avatars/andrea.schmidt.png')
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      stories: []
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    //let stories = await fetch('www.gogole.vcvom/stor').then(result => result.json())
    this.setState({ 
      isReady: true,
      stories: StoryListData
    });
  }

  render() {
    const uri1 = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
    const uri2 = "https://images.unsplash.com/photo-1528475775637-ed767f76e6b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80";
    const uri3 = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80";
    const uri4 = "https://images.unsplash.com/photo-1523049267777-25e40aca71c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80";
    const uri5 = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Stories stories={this.state.stories} />
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <View style={{ height: 100 }}>
            <View style={{
              flex: 1, flexDirection: 'row', justifyContent: "space-between",
              alignItems: 'center', paddingHorizontal: 7
            }}>
              <Text>Stories</Text>
              <Text>Watch All</Text>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
                centerCotainerStyle={{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5
                }}>
                <Thumbnail style={{ marginHorizontal: 5, borderColor: '#C13584', borderWidth: 2 }} source={{ uri: uri1 }}></Thumbnail>
                <Thumbnail style={{ marginHorizontal: 5, borderColor: '#C13584', borderWidth: 2 }} source={{ uri: uri2 }}></Thumbnail>
                <Thumbnail style={{ marginHorizontal: 5, borderColor: '#C13584', borderWidth: 2 }} source={{ uri: uri3 }}></Thumbnail>
                <Thumbnail style={{ marginHorizontal: 5, borderColor: '#C13584', borderWidth: 2 }} source={{ uri: uri4 }}></Thumbnail>
                <Thumbnail style={{ marginHorizontal: 5, borderColor: '#C13584', borderWidth: 2 }} source={{ uri: uri5 }}></Thumbnail>
                <Thumbnail style={{ marginHorizontal: 5, borderColor: '#C13584', borderWidth: 2 }} source={{ uri: uri5 }}></Thumbnail>
                <Thumbnail style={{ marginHorizontal: 5, borderColor: '#C13584', borderWidth: 2 }} source={{ uri: uri5 }}></Thumbnail>
                <Thumbnail style={{ marginHorizontal: 5, borderColor: '#C13584', borderWidth: 2 }} source={{ uri: uri5 }}></Thumbnail>
              </ScrollView>
            </View>
          </View>
          <Text>
            This is Content Section
          </Text>
        </Content>

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
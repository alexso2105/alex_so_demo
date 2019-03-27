
import React, { Component } from "react";
import { View, FlatList, Image, Dimensions } from "react-native";
import PhotoStore from "alex_demo/src/stores/PhotoStore";
import ScreenContainer from "alex_demo/src/components/ScreenContainer";
import { Subscribe } from "unstated";
import http from "alex_demo/src/utils/http";
import { CachedImage } from 'react-native-cached-image';

export default class AlbumDetailScreenContainer extends Component {
  render() {
    return (
      <Subscribe to={[PhotoStore]}>
        {photoStore => (
          <AlbumDetailScreen photoStore={photoStore} {...this.props} />
        )}
      </Subscribe>
    );
  }
}

class AlbumDetailScreen extends Component {
  renderItem = ({ item }) => {
    return (
      <View style={{alignItems: "center"}}>
        <CachedImage
          source={{ uri: http.convertToHTTPS(item.url) }}
          style={{
            width: Dimensions.get('window').width*0.8,
            height: Dimensions.get('window').width*0.8
          }}
        />
      </View>
    );
  };
  render() {
    const { photoStore } = this.props;
    return (
      <ScreenContainer>
        <FlatList
          data={photoStore.state.currentAlbum}
          renderItem={this.renderItem}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScreenContainer>
    );
  }
}
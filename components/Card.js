import React from "react";
import PropTypes from "prop-types";
import { Image, Linking, Text, TouchableHighlight, View } from "react-native";
import { CardStyle } from "./CardStyle";

export const Card = ({ title, image, description, url }) => {
  const onPressMore = () => {
    console.log("button");
    Linking.openURL(url);
  };

  return (
    <View style={CardStyle.container}>
      <Text style={CardStyle.title}>{title}</Text>

      <Image style={CardStyle.mainImage} source={{ uri: image }} />

      <Text style={CardStyle.description}>{description}</Text>

      <TouchableHighlight
        style={CardStyle.button}
        underlayColor="#FF6659"
        onPress={onPressMore}
      >
        <Text style={CardStyle.buttonText}>Ver más</Text>
      </TouchableHighlight>
    </View>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
};

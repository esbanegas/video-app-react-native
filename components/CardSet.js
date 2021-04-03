import React from "react";
import PropTypes from "prop-types";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card } from "./Card";

export const CardSet = ({ items }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {items.map((item, key) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            url={item.url}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#E1E2E1",
  },
});

CardSet.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      image: PropTypes.string.isRequired,
      url: PropTypes.string,
    })
  ),
};

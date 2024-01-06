import { View } from "react-native";
import React from "react";
import FeatureRow from "./FeatureRow";
import { featured, featured2 } from "../../constants";

const FeaturedList = () => {
  return (
    <View>
      {[featured, featured2, featured].map((item, index) => {
        return (
          <FeatureRow
            key={index}
            title={item.title}
            restaurants={item.restaurants}
            description={item.description}
          />
        );
      })}
    </View>
  );
};

export default FeaturedList;

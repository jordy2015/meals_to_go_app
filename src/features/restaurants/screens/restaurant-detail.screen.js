import React from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { SafeArea } from "../../../components/utility/safe-are.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};

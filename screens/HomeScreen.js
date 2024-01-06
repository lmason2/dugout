import { StatusBar, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchProductBar from "../components/SearchProductBar/SearchProductBar";
import CategoriesList from "../components/CategoriesList/CategoriesList";
import FeaturedList from "../components/FeaturedList/FeaturedList";
import SpecialsList from "../components/SpecialsList/SpecialsList";
import BrandList from "../components/BrandList/BrandList";
import LoginModal from "../(modals)/LoginModal";

const HomeScreen = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      <SearchProductBar
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <CategoriesList />
        <SpecialsList />
        <BrandList />
        <FeaturedList />
      </ScrollView>
      <LoginModal
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

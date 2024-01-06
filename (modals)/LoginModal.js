import React, { useCallback, useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal"; // Import the modal component
import { useRouter } from "expo-router";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { useAuth, useOAuth } from "@clerk/clerk-expo";
import { themeColors } from "../theme";

const Strategy = {
  Google: "oauth_google",
  Apple: "oauth_apple",
  Facebook: "oauth_facebook",
};

const LoginModal = ({ showLoginModal, setShowLoginModal }) => {
  useWarmUpBrowser();
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  const closeModal = () => {
    setShowLoginModal(false);
  };

  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: "oauth_apple" });
  const { startOAuthFlow: facebookAuth } = useOAuth({
    strategy: "oauth_facebook",
  });

  const onSelectAuth = useCallback(async (strategy) => {
    const selectedAuth = {
      [Strategy.Google]: googleAuth,
      [Strategy.Apple]: appleAuth,
      [Strategy.Facebook]: facebookAuth,
    }[strategy];

    try {
      const { createdSessionId, authSessionResult, setActive } =
        await selectedAuth();
      console.log(
        "🚀 ~ file: login.tsx:37 ~ onSelectAuth ~ createdSessionId:",
        createdSessionId
      );

      if (createdSessionId) {
        setActive({ session: createdSessionId });
        // router.back();
        setShowLoginModal(false);
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      setShowLoginModal(true);
    }
  }, [isLoaded, isSignedIn]);

  return (
    <Modal isVisible={showLoginModal} onBackdropPress={closeModal}>
      <View style={styles.container} onBackdropPress={closeModal}>
        <StatusBar barStyle={"light-content"} />
        <TouchableOpacity
          style={styles.exitBtn}
          onPress={() => setShowLoginModal(false)}
        >
          <Ionicons name="close" color="white" size={18} />
        </TouchableOpacity>
        <TextInput
          autoCapitalize="none"
          placeholder="Email"
          style={[styles.inputBox, { marginBottom: 30 }]}
        />

        <TouchableOpacity style={styles.continueBtn}>
          <Text style={{ color: "white", fontWeight: 800 }}>Continue</Text>
        </TouchableOpacity>

        <View style={styles.seperatorView}>
          <View
            style={{
              flex: 1,
              borderBottomColor: "white",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <Text style={styles.seperator}>or</Text>
          <View
            style={{
              flex: 1,
              borderBottomColor: "white",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        </View>

        <View style={{ gap: 20 }}>
          <TouchableOpacity style={styles.btnOutline}>
            <Ionicons style={styles.icon} name="call-outline" size={24} />
            <Text style={styles.btnOutlineText}>Continue with Phone</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={styles.btnOutline}
            onPress={async () => await onSelectAuth(Strategy.Apple)}
          >
            <Ionicons style={styles.icon} name="md-logo-apple" size={24} />
            <Text style={styles.btnOutlineText}>Continue with Apple</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={styles.btnOutline}
            onPress={async () => await onSelectAuth(Strategy.Google)}
          >
            <Ionicons style={styles.icon} name="md-logo-google" size={24} />
            <Text style={styles.btnOutlineText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnOutline}
            onPress={async () => await onSelectAuth(Strategy.Facebook)}
          >
            <Ionicons style={styles.icon} name="md-logo-facebook" size={24} />
            <Text style={styles.btnOutlineText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LoginModal;

const styles = StyleSheet.create({
  exitBtn: {
    position: "absolute",
    top: "6%",
    left: "8%",
    padding: "4%",
    backgroundColor: "gray",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    padding: 26,
    justifyContent: "center",
  },
  inputBox: {
    borderRadius: 8,
    backgroundColor: "#fff",
    padding: 15,
  },
  seperatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  seperator: {
    //   fontFamily: 'mon-sb',
    color: "white",
    fontSize: 16,
  },
  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "gray",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: "#000",
    fontSize: 16,
    //   fontFamily: 'mon-sb',
  },
  icon: {
    marginHorizontal: 20,
  },
  continueBtn: {
    backgroundColor: themeColors.bgColor(1),
    padding: 20,
    display: "flex",
    alignItems: "center",
    borderRadius: 50,
  },
});

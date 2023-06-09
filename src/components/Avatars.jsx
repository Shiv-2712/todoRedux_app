import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Avatars = () => {
  const avatarData = [
    { id: 1, image: require("../assets/Avatar1.png") },
    { id: 2, image: require("../assets/Avatar2.png") },
    { id: 3, image: require("../assets/Avatar3.png") },
  ];

  return (
    <View style={styles.avatars}>
      {avatarData.map((avatar) => (
        <Image
          key={avatar.id}
          source={avatar.image}
          style={styles.avatarsItem}
        />
      ))}
      <View style={styles.avatarsItem}>
        <Text style={{ textAlign: "center", textAlignVertical: "center" }}>
          +5
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatars: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    width: 84,
    height: 24,
  },
  avatarsItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 50,
    marginLeft: -4,
    backgroundColor: "#F2F4F7",
  },
});
export default Avatars;

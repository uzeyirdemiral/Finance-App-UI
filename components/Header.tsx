import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.userInfoWrapper}>
          <Image
            source={{ uri: "https://i.pravatar.cc/250?u=12" }}
            style={styles.userImg}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: Colors.white, fontSize: 12 }}>Hi,Jenny</Text>
            <Text style={{ color: Colors.white, fontSize: 16 }}>
              Your<Text style={{ fontWeight: "700" }}> Budget</Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.btnWrapper}>
          <Text style={styles.btnText}>My Transactions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  userInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImg: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  btnWrapper: {
    borderColor: "#666",
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
  },
  btnText: {
    color: Colors.white,
    fontSize: 12,
  },
});

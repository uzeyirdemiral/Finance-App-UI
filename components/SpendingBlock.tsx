import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SpendingType } from "@/types";
import Colors from "@/constants/Colors";
import {
  AirbnbIcon,
  AmazonIcon,
  DollarIcon,
  FigmaIcon,
  NetflixIcon,
  ShoopingCartIcon,
  SpotifyIcon,
} from "@/constants/Icons";

const SpendingBlock = ({ spendingList }: { spendingList: SpendingType[] }) => {
  let icon = <DollarIcon height={22} width={22} color={Colors.white} />;
  return (
    <View style={{ marginVertical: 10, alignItems: "flex-start" }}>
      <Text style={{ color: Colors.white, marginBottom: 20, fontSize: 16 }}>
        July <Text style={{ fontWeight: "700" }}>Spending</Text>
      </Text>

      {spendingList.map((item) => {
        if (item.name == "AirBnB Rent") {
          icon = <AirbnbIcon height={22} width={22} color={Colors.white} />;
        } else if (item.name == "Netflix") {
          icon = <NetflixIcon height={22} width={22} color={Colors.white} />;
        } else if (item.name == "Spotify") {
          icon = <SpotifyIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Amazon") {
          icon = <AmazonIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Figma") {
          icon = <FigmaIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Online Shopping") {
          icon = (
            <ShoopingCartIcon width={22} height={22} color={Colors.white} />
          );
        }
        return (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <View
              style={{
                backgroundColor: Colors.grey,
                padding: 15,
                borderRadius: 50,
                marginRight: 10,
              }}
            >
              {icon}
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ gap: 5 }}>
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </Text>
                <Text style={{ color: Colors.white }}>{item.date}</Text>
              </View>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                ${item.amount}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default SpendingBlock;

const styles = StyleSheet.create({});

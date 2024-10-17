import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { IncomeType } from "@/types";
import { Feather } from "@expo/vector-icons";
import {
  DollarIcon,
  WalletAddMoneyIcon,
  WalletCardIcon,
} from "@/constants/Icons";

const IncomeBlock = ({ incomeList }: { incomeList: IncomeType[] }) => {
  const renderItem: ListRenderItem<IncomeType> = ({ item }) => {
    let amount = item.amount.split(".");
    let icon = <DollarIcon width={22} height={22} color={Colors.white} />;
    if (item.name == "Freelancing") {
      icon = <WalletCardIcon height={22} width={22} color={Colors.white} />;
    } else if (item.name == "Interest") {
      icon = <WalletAddMoneyIcon height={22} width={22} color={Colors.white} />;
    }
    return (
      <View
        style={{
          backgroundColor: Colors.grey,
          padding: 20,
          borderRadius: 20,
          marginRight: 15,
          width: 150,
          gap: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#666",
              borderWidth: 1,
              borderRadius: 50,
              padding: 5,
              alignSelf: "flex-start",
            }}
          >
            {icon}
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="more-horizontal" size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <Text style={{ color: Colors.white }}>{item.name}</Text>
        <Text style={{ color: Colors.white, fontSize: 18, fontWeight: "600" }}>
          ${amount[0]}.
          <Text style={{ fontWeight: "400", fontSize: 12 }}>{amount[1]}</Text>
        </Text>
      </View>
    );
  };
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ color: Colors.white, marginBottom: 10, fontSize: 16 }}>
        My <Text style={{ fontWeight: "700" }}>Income</Text>{" "}
      </Text>
      <FlatList
        data={incomeList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default IncomeBlock;

const styles = StyleSheet.create({});

import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ExpenseType } from "@/types";
import Colors from "@/constants/Colors";

import { Feather } from "@expo/vector-icons";

const ExpenseBlock = ({ expenseList }: { expenseList: ExpenseType[] }) => {
  const renderItem: ListRenderItem<Partial<ExpenseType>> = ({
    item,
    index,
  }) => {
    if (index == 0) {
      return (
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.addItemBtn}>
            <Feather name="plus" size={22} color={"#ccc"} />
          </View>
        </TouchableOpacity>
      );
    }

    let amount = item.amount.split(".");
    return (
      <View
        style={[
          styles.expenseBlock,
          {
            backgroundColor:
              item.name == "Food"
                ? Colors.blue
                : item.name == "Saving"
                ? Colors.white
                : Colors.tintColor,
          },
        ]}
      >
        <Text
          style={[
            styles.expenseBlockText1,
            {
              color:
                item.name == "Food"
                  ? Colors.black
                  : item.name == "Saving"
                  ? Colors.black
                  : Colors.white,
            },
          ]}
        >
          {item.name}
        </Text>
        <Text
          style={[
            styles.expenseBlockText2,
            {
              color:
                item.name == "Food"
                  ? Colors.black
                  : item.name == "Saving"
                  ? Colors.black
                  : Colors.white,
            },
          ]}
        >
          ${amount[0]}.
          <Text style={styles.expenseBlockText2Span}>{amount[1]}</Text>
        </Text>
        <View style={styles.expenseBlock3View}>
          <Text
            style={[
              styles.expenseBlockText1,
              {
                color:
                  item.name == "Food"
                    ? Colors.black
                    : item.name == "Saving"
                    ? Colors.black
                    : Colors.white,
              },
            ]}
          >
            {item.percentage}%
          </Text>
        </View>
      </View>
    );
  };

  const staticItem = [{ name: "add Item" }];
  return (
    <View>
      <FlatList
        data={staticItem.concat(expenseList)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ExpenseBlock;

const styles = StyleSheet.create({
  expenseBlock: {
    backgroundColor: Colors.tintColor,
    width: 100,
    padding: 15,
    borderRadius: 15,
    marginRight: 20,
    gap: 8,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  expenseBlockText1: {
    color: Colors.white,
    fontSize: 14,
  },
  expenseBlockText2: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  expenseBlockText2Span: {
    fontSize: 12,
    fontWeight: "400",
  },
  expenseBlock3View: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
  },
  addItemBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#666",
    borderStyle: "dashed",
    borderRadius: 10,
    marginRight: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { StyleSheet, Text, ScrollView, Pressable, View } from "react-native";

function MetasList(props) {
  return (
    <ScrollView>
      {props.array.map((meta) => {
        return (
          <View key={meta.id} style={styles.item}>
            <Pressable
              android_ripple={{ color: "yellow" }}
              key={meta.id}
              onPress={() => props.onDeleteItem(meta.id)}
            >
              <Text>{meta.texto}</Text>
            </Pressable>
          </View>
        );
      })}
    </ScrollView>
  );
}

export default MetasList;

const styles = StyleSheet.create({
  item: {
    margin: 8,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "lightblue",
  },
});

import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView } from "react-native";
import Header from "./src/components/Header.jsx";
import Title from "./src/components/Title.jsx";
import Description from "./src/components/Description.jsx";
import Avatars from "./src/components/Avatars.jsx";
import TaskList from "./src/components/TaskList.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store";
import DummyComp from "./src/components/DummyComp.jsx";

export default function App() {
  return (
    <Provider store={store}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <Title />
        <Description />
        <Avatars />
        <TaskList />
        <DummyComp />
        <StatusBar style="auto" />
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffff",
    paddingVertical: 20,
  },
});

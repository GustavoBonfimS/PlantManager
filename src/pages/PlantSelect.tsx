import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import { Header } from "../components/Header";
import { EnviromentButton } from "../components/EnviromentButton";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import api from '../services/api';

export function PlanSelect() {
  const [environments, setEnvironments] = useState();

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get('/plants_environments')
    }
    fetchEnviroment();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>Você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList horizontal data={[1,2,3,4,5]} renderItem={({ item }) => (
          <EnviromentButton title="Cozinha" />
        )} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.enviromentList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  }
});

import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button, Icon, Provider as PaperProvider, TextInput, useState } from "react-native-paper";

const estil = "florida";
const isAdmin = true;

const mostrarIcona = () => {
  return(
    <Button mode="contained" icon = "format-list-bulleted">
      INFORMES
    </Button>
  )
}

const Nom = (textAmostrar, estil) => {
  return (
    <Text style={estil}>{textAmostrar}</Text>
  )
}
const arreu = () => {
  return estil == "florida" ? "white" : "orange"
}
const Dades = (arr) => {
  return (
    arr.map((elem, index) => {
      return (
        <View key={index}>
        <TextInput
          placeholderTextColor={arreu}
          style={styles[estil]}
          key={index}
          placeholder={elem}
        />
        </View>
      )
    })
  )

}

const Inici = () => {
  return (
    <PaperProvider>
      <View>
        {Nom("Jorge Sevilla Genoves", { fontSize: 18, fontWidth: "bold", margin: 20 })}
        {Dades(["Correu", "Nom"])}
        {mostrarIcona()}
      </View>
    </PaperProvider>
  );
}


const styles = StyleSheet.create(
  {
    upv: {
      backgroundColor: 'purple',
      fontSize: 10,
      fontWeight: '600',
      padding: 4,
      paddingLeft: 12,
      textAlign: 'left',
      color: 'grey',
    },
    florida: {
      backgroundColor: 'red',
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  })
export default Inici;
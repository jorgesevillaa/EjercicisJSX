import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button, Icon, Provider as PaperProvider, TextInput} from "react-native-paper";

const estil = "florida";
const isAdmin = true;

const mostrarIcona = () => {
  return (
    <Button mode="contained" icon="format-list-bulleted">
      INFORMES
    </Button>
  )
}
const moduls2Dam = [
  { nom: 'DIN', professor: 'Manel', hores: 120, style: { backgroundColor: "#F48FB1" } },
  { nom: 'ADA', professor: 'Roberto', hores: 120, style: { backgroundColor: "#F8BBD0" } },
  { nom: 'PMDM', professor: 'Paco', hores: 100, style: { backgroundColor: "#F48FB1" } },
  { nom: 'PSP', professor: 'Roberto', hores: 60, style: { backgroundColor: "#F8BBD0" } },
  { nom: 'SGE', professor: 'Belén', hores: 100, style: { backgroundColor: "#F48FB1" } },
  { nom: 'Anglés', professor: 'Caterina', hores: 40, style: { backgroundColor: "#F8BBD0" } },
  { nom: 'EIE', professor: 'Ana', hores: 60, style: { backgroundColor: "#F48FB1" } },
];


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
            placeholderTextColor={arreu()}
            style={styles[estil]}
            key={index}
            placeholder={elem}
          />
        </View>
      )
    })
  )

}
const camps = () => {

  return (
    moduls2Dam.map((elem, index) => {
      return (
        <View style={elem.style} key={index}>
          <Text>{index}</Text>
          <Text>{elem.nom}</Text>
          <Text>{elem.professor}</Text>
          <Text>{elem.hores}</Text>
        </View>
      )
    })
  )
}
const Inici = () => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <PaperProvider>
      <View>
        {Nom("Jorge Sevilla Genoves", { fontSize: 18, fontWeight: "bold", margin: 20 })}
        {Dades(["Correu", "Nom"])}

        <Pressable onPress={() => setMostrar(!mostrar)}>
          {mostrarIcona()}
        </Pressable>
        {mostrar && camps()}
      </View>
    </PaperProvider>
  );
};

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
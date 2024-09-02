import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import BottomNav from "@/components/BottomNav";
import { useFonts } from "expo-font";
import PageIndicator from "@/components/PageIndicator";
import RangeSlider from "@/components/forms/RangeSlider";
import DropdownInput from "@/components/forms/DropDownInput";
import NumericInput from "@/components/forms/NumericInput";
import DropdownInputWorkingRoughness from "@/components/forms/DropDownInputWorkingRoughness";

const Index = () => {
  const [kinViscosity, setKinViscosity] = useState('');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.headText}>According to ATV A110:</Text>
      </View>
      <View style={styles.formMainContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.formText}>Internal Diameter</Text>
          <View style={styles.cardContainer}>
            <RangeSlider min={0} max={4000} />
          </View>
          <Text style={styles.formText}>Kin.viscosity 10x^-6[m²]</Text>
          <View style={styles.cardContainer}>
            <DropdownInput
              placeholder="Select or enter water type..."
              onValueChange={(value) => value}
            />
          </View>
          <Text style={styles.formText}>Slope:[m/1000m]</Text>
          <View style={styles.cardContainer}>
            <NumericInput
              value={kinViscosity}
              onChange={setKinViscosity}
              placeholder="Enter viscosity value..."
            />
          </View>
          <Text style={styles.formText}>Filling Height:</Text>
          <View style={styles.cardContainer}>
            <RangeSlider min={0} max={100} />
          </View>
          <Text style={styles.formText}>Working Roughness: [kb]</Text>
          <View style={styles.cardContainer}>
            <DropdownInputWorkingRoughness 
             placeholder="Select or enter water type..."
             onValueChange={(value) => value}
                 />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
  },
  headText: {
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontFamily: "Rubik",
  },
  mainContainer: {
    backgroundColor: "white",
  },
  formContainer: {
    margin: 25,
  },
  formMainContainer: {
    backgroundColor: "#D9D9D9",
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  formText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Index;

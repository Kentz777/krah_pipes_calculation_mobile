import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import RangeSlider from "@/components/forms/RangeSlider";
import DropdownInput from "@/components/forms/DropDownInput";
import NumericInput from "@/components/forms/NumericInput";
import DropdownInputWorkingRoughness from "@/components/forms/DropDownInputWorkingRoughness";
import PageIndicator from "@/components/PageIndicator";

const { PI, sqrt, log, acos } = Math;

const log10 = (x: number) => log(x) / log(10);

// Define roughness values for different materials
const roughnessValues: { [key: string]: number } = {
  "Krah-pressure-pipes": 0.1,
  Steel: 0.05,
  "Concrete kb": 0.15,
};

function calculateFlowParameters(
  diameter_mm: number,
  kv: number,
  slope: number,
  fillHeightPercent: number,
  kb: number,
  g: number = 9.81
) {
  const diameter_m: number = diameter_mm / 1000;
  const At: number = (PI * diameter_m ** 2) / 4;
  const fillHeight: number = (fillHeightPercent / 100) * diameter_m;
  const r: number = diameter_m / 2;
  const Av: number =
    r ** 2 * acos((r - fillHeight) / r) -
    (r - fillHeight) * sqrt(2 * r * fillHeight - fillHeight ** 2);

  const vt: number =
    -2 *
    log10(
      (2.51 * kv * 1e-6) /
      (diameter_m * sqrt(2 * g * diameter_m * slope / 1000)) +
      kb * 1e-3 / (3.71 * diameter_m)
    ) *
    sqrt(2 * g * diameter_m * slope / 1000);

  const Qt: number = At * vt * 1000;
  const Pv: number = r * 2 * acos((r - fillHeight) / r);
  const rv: number = Av / Pv;
  const rt: number = diameter_m / 4;
  const vv: number = vt * (rv / rt) ** 0.625;
  const Qv: number = Av * vv * 1000;

  return {
    vt: vt,
    Qt: Qt,
    vv: vv,
    Qv: Qv,
  };
}

interface FlowValues {
  full: string;
  partial: string;
}

const Index: React.FC = () => {
  const [diameter, setDiameter] = useState<number>(1958); // Default value for diameter
  const [kinViscosity, setKinViscosity] = useState<number>(1); // Default value for kinematic viscosity
  const [slope, setSlope] = useState<number>(30); // Default value for slope
  const [fillingHeight, setFillingHeight] = useState<number>(30); // Default value for filling height
  const [roughness, setRoughness] = useState<number>(roughnessValues["Krah-pressure-pipes"]); // Default roughness

  const [flowSpeed, setFlowSpeed] = useState<FlowValues>({ full: "0", partial: "0" });
  const [flowRate, setFlowRate] = useState<FlowValues>({ full: "0", partial: "0" });

  useEffect(() => {
    if (diameter && kinViscosity && slope && fillingHeight && roughness) {
      const { vt, Qt, vv, Qv } = calculateFlowParameters(
        diameter,
        kinViscosity,
        slope,
        fillingHeight,
        roughness
      );

      setFlowSpeed({ full: vt.toFixed(2), partial: vv.toFixed(2) });
      setFlowRate({ full: Qt.toFixed(2), partial: Qv.toFixed(2) });
    }
  }, [diameter, kinViscosity, slope, fillingHeight, roughness]);

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.headText}>According to ATV A110:</Text>
          <View style={styles.resultsContainer}>
            <Text style={styles.resultText}>Flow Speed:</Text>
            <Text>100%: {flowSpeed.full} m/s</Text>
            <Text>{fillingHeight}%: {flowSpeed.partial} m/s</Text>
            <Text style={styles.resultText}>Flow Rate:</Text>
            <Text>100%: {flowRate.full} L/s</Text>
            <Text>{fillingHeight}%: {flowRate.partial} L/s</Text>
          </View>
        </View>
        <View style={styles.formMainContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.formText}>Internal Diameter: {diameter} mm</Text>
            <View style={styles.cardContainer}>
              <RangeSlider
                min={0}
                max={4000}
                initialValue={diameter}
                onValueChange={(value: number) => setDiameter(value)}
              />
            </View>
            <Text style={styles.formText}>Kin. viscosity 10x^-6 [m²/s]</Text>
            <View style={styles.cardContainer}>
              <DropdownInput
                placeholder="Select or enter water type..."
                onValueChange={(value: string) => setKinViscosity(parseFloat(value))}
              />
            </View>
            <Text style={styles.formText}>Slope: [m/1000m]</Text>
            <View style={styles.cardContainer}>
              <NumericInput
                value={slope.toString()} // Convert number to string
                onChange={(value: string) => setSlope(parseFloat(value))}
                placeholder="Enter slope value..."
              />
            </View>
            <Text style={styles.formText}>Filling Height: {fillingHeight}%</Text>
            <View style={styles.cardContainer}>
              <RangeSlider
                min={0}
                max={100}
                initialValue={fillingHeight}
                onValueChange={(value: number) => setFillingHeight(value)}
              />
            </View>
            <Text style={styles.formText}>Working Roughness: [kb]</Text>
            <View style={styles.cardContainer}>
              <DropdownInputWorkingRoughness
                placeholder="Select or enter roughness..."
                onValueChange={(value: string) => setRoughness(roughnessValues[value])}
              />
            </View>
          </View>
        </View>
        <PageIndicator pageName='Hydraulic Calculation' />
      </View>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
  },
  container: {
    margin: 25,
  },
  headText: {
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontFamily: "Rubik",
  },
  formMainContainer: {
    backgroundColor: "#D9D9D9",
  },
  formContainer: {
    margin: 25,
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
  resultsContainer: {
    margin: 25,
    backgroundColor: "#D9D9D9",
    padding: 10,
    borderRadius: 5,
  },
  resultText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default Index;

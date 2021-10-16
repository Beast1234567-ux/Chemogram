import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    TextInput
} from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";

export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewImage: "image_1",
            dropdownHeight: 40
        };
    }

    componentDidMount() {

    }

    render() {
        let preview_images = {
            image_1: require("../assets/Hydrogen_Tile.png"),
            image_2: require("../assets/Helium_Tile.png"),
            image_3: require("../assets/Lithium_Tile.png"),
            image_4: require("../assets/Beryllium_Tile.png"),
            image_5: require("../assets/Boron_Tile.png"),
            image_6: require("../assets/Carbon_Tile.png"),
            image_7: require("../assets/Nitrogen_Tile.png"),
            image_8: require("../assets/Oxygen_Tile.png"),
            image_9: require("../assets/Fluorine_Tile.png"),
            image_10: require("../assets/Neon_Tile.png"),
            image_11: require("../assets/Sodium_Tile.png"),
            image_12: require("../assets/Magnesium_Tile.png"),
            image_13: require("../assets/Aluminum_Tile.png"),
            image_14: require("../assets/Silicon_Tile.png"),
            image_15: require("../assets/Phosphorus_Tile.png"),
            image_16: require("../assets/Sulfur_Tile.png"),
            image_17: require("../assets/Chlorine_Tile.png"),
            image_18: require("../assets/Argon_Tile.png"),
            image_19: require("../assets/Potassium_Tile.png"),
            image_20: require("../assets/Calcium_Tile.png"),
            

            
            

            

            
        };
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                            source={require("../assets/pp.png")}
                            style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>First 20 Elements</Text>
                    </View>
                </View>
                <View style={styles.fieldsContainer}>
                    <ScrollView>
                        <Image
                            source={preview_images[this.state.previewImage]}
                            style={styles.previewImage}
                        ></Image>
                        <View style={{ height: RFValue(this.state.dropdownHeight) }}>
                            <DropDownPicker
                                items={[
                                    { label: "H", value: "image_1" },
                                    { label: "He", value: "image_2" },
                                    { label: "Li", value: "image_3" },
                                    { label: "Be", value: "image_4" },
                                    { label: "B", value: "image_5" },
                                    { label: "C", value: "image_6" },
                                    { label: "N", value: "image_7" },
                                    { label: "O", value: "image_8" },
                                    { label: "F", value: "image_9" },
                                    { label: "Ne", value: "image_10" },
                                    { label: "Na", value: "image_11" },
                                    { label: "Mg", value: "image_12" },
                                    { label: "Al", value: "image_13" },
                                    { label: "Si", value: "image_14" },
                                    { label: "P", value: "image_15" },
                                    { label: "S", value: "image_16" },
                                    { label: "Cl", value: "image_17" },
                                    { label: "Ar", value: "image_18" },
                                    { label: "K", value: "image_19" },
                                    { label: "Ca", value: "image_20" },

                                ]}
                                defaultValue={this.state.previewImage}
                                containerStyle={{
                                    height: 40,
                                    borderRadius: 20,
                                    marginBottom: 10
                                }}
                                onOpen={() => {
                                    this.setState({ dropdownHeight: 170 });
                                }}
                                onClose={() => {
                                    this.setState({ dropdownHeight: 40 });
                                }}
                                style={{ backgroundColor: "transparent" }}
                                itemStyle={{
                                    justifyContent: "flex-start"
                                }}
                                dropDownStyle={{ backgroundColor: "#2a2a2a" }}
                                labelStyle={{
                                    color: "white"
                                }}
                                arrowStyle={{
                                    color: "white"
                                }}
                                onChangeItem={item =>
                                    this.setState({
                                        previewImage: item.value
                                    })
                                }
                            />
                        </View>

                      
                        />
                    </ScrollView>
                </View>
                <View style={{ flex: 0.08 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28)
    },
    fieldsContainer: {
        flex: 0.85
    },
    previewImage: {
        width: "93%",
        height: RFValue(250),
        alignSelf: "center",
        borderRadius: RFValue(10),
        marginVertical: RFValue(10),
        resizeMode: "contain"
    },
    
});

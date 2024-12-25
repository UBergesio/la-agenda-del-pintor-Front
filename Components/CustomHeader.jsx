// CustomHeader.js
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";


const CustomHeader = ({ navigation }) => {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", paddingLeft: 10 }}
    >
      {/* Círculo con imagen en la parte izquierda del encabezado */}
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <View
          style={{
            /* width: 40,
            height: 40,
            borderRadius: 20,
            overflow: "hidden", */
            width: 40,
            height: 40,
            padding: 14,
          }}
        >
          {/* Aquí colocarías la imagen de perfil */}
          <MaterialCommunityIcons name="account" />
          {/* <Image
            source={{ uri: "https://placekitten.com/200/200" }} // Placeholder
            style={{ width: "100%", height: "100%" }}
          /> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

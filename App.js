import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, TextInput, ImageBackground, FlatList, Image,TouchableOpacity, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


function SmartScript() {

 
  
 const [products, setProducts] = useState([
    { id: "1", name: "Personal", image: require("./assets/poster5.jpg"), isSelected: true },
    { id: "2", name: "Promotion", image: require("./assets/poster2.png"), isSelected: false },
    { id: "3", name: "Branding", image: require("./assets/poster3.jpg"), isSelected: false },
    { id: "4", name: "Example 4", image: require("./assets/poster4.png"), isSelected: false },
    { id: "5", name: "Example 4", image: require("./assets/poster6.jpg"), isSelected: false },
    { id: "6", name: "Example 4", image: require("./assets/poster1.png"), isSelected: false },
    { id: "7", name: "Example 4", image: require("./assets/poster1.png"), isSelected: false },
  ]);

const handleSelect = (id) => {
  setProducts((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, isSelected: true }   // selected item
        : { ...item, isSelected: false }  // all others unselected
    )
  );
};



  const [text, setText] = useState();


    const handleChange = (input) => {
    // Prevent user from deleting the baseText
    if (true) {
      setText(input);
    } else {
      setText(input);
    }
  };  

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>
        What type of posters do you want to create?
        </Text>


        {/* ProductTypes */}

    <View>

           <FlatList
             contentContainerStyle={styles.flatListContent}
        data={products}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.product, item.isSelected && styles.productActive]}
            onPress={() => handleSelect(item.id)}
          >
            <ImageBackground style={styles.productList} source={item.image}>
              {/* Fixed background bar with moving text */}
              <View style={styles.textBar}>
                <Text
                  style={styles.titleAM}
                 
                >
                  {item.name}
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />


</View>

      <TextInput 
       multiline
        numberOfLines={5}
      style={styles.textInput}
      placeholder='Enter Prompt Here!'
      value={text}
        onChangeText={handleChange}
      >
        
      </TextInput>

      <TouchableOpacity>
        <MaterialCommunityIcons style={styles.addImage} name="image-plus-outline" size={20} color="white" />
      </TouchableOpacity>

      <Text style={styles.setting}>
        Setting
      </Text>

      <TouchableOpacity style={[styles.flex, styles.settingTwo]}>
        <View>
          <Text style={styles.heaa}>Size</Text>
        </View>
        <View style={[styles.flex, styles.flexTwo]}>
          <Text style={styles.ddde}>1080 x 1920 px</Text>
          <Text style={styles.ion}><Ionicons name="chevron-forward-sharp" size={20} color="rgba(255, 255, 255, 0.52)" /></Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.flex, styles.settingOne]}>
        <View>
          <Text style={styles.heaa}>Category</Text>
        </View>
        <View style={[styles.flex, styles.flexTwo]}>
          <Text style={styles.ddde}>1080 x 1920 px</Text>
          <Text style={styles.ion}><Ionicons name="chevron-forward-sharp" size={20} color="rgba(255, 255, 255, 0.52)" /></Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={styles.btn}>
        <Image style={styles.btnDot} source={require("./assets/dott.jpg")}></Image>
        <Text style={styles.btnText}>Generate</Text>
      </TouchableOpacity>

      





     
        
        
    </View>
  );
}

function AdvancedScript() {

  return (
    <View style={styles.screen}>
      {/* <Text style={styles.text}>Advanced Script Content</Text> */}
    </View>
  );
}
const Tab = createBottomTabNavigator();


export default function App() {


 const [activeTab, setActiveTab] = useState("Smart");

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      

      {/* topClose */}
      
      <TouchableOpacity>
        <AntDesign style={styles.iconClose} name="close" size={18} color="white" />
      </TouchableOpacity>


 <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab("Smart")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Smart" && styles.activeTabText,
            ]}
          >
            Smart Script
          </Text>
          {activeTab === "Smart" && (
            <LinearGradient
              colors={["#55d6d6ff", "#8600d473"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientBorder}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab("Advanced")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Advanced" && styles.activeTabText,
            ]}
          >
            Advanced Script
          </Text>
          {activeTab === "Advanced" && (
            <LinearGradient
              colors={["#00BCD4","#4CAF50" ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientBorder}
            />
          )}
        </TouchableOpacity>
      </View>

      {/* Screen Content */}
      <View style={{ flex: 1 }}>
        {activeTab === "Smart" ? <SmartScript /> : <AdvancedScript />}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flex: 1,
    backgroundColor: 'black',
  },
  iconClose:{
    padding:10,
    paddingTop:25,
  },

  tabContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    paddingVertical: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    position: "relative",
  },
  tabText: {
    color: "#aaa",
    fontSize: 16,
  },
  activeTabText: {
    color: "#fff",
    paddingBottom:5,
    fontWeight: "bold",
  },
  gradientBorder: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    borderRadius: 2,
  },
  screen: {
    flex: 1,
   
  },
  text: {
    color: "#fff",
    fontSize: 18,
    padding:5,
    fontWeight:"bold",
    padding:10,
  },

  product:{
    width:80,
    height:100,
    margin:3,
    borderRadius:10,
    borderWidth:2,
    // padding:10,
    overflow: "hidden",
  },

  productActive:{
    borderColor:"white",
  },

  productList:{
    overflow: "hidden",
    width:75,
    height:95,
    borderRadius:5,
    flex:1,
    justifyContent:"flex-end"
  },

  titleAM:{
    fontSize:11,
    color:"white",
    backgroundColor:"rgba(221, 202, 119, 0.79)",
    position:"relative",
    bottom:0,
    right:0,
    zIndex:11,
    width:"100%",
    textAlign:"center",
    marginTop:70,
    padding:4,
    borderRadius:3,
  },

   flatListContent: {
    paddingHorizontal: 10, // spacing for the horizontal list
  },

  textInput:{
    backgroundColor:"rgba(255, 255, 255, 0.2)",
    padding:10,
    margin:10,
    textAlign:"top",
    height:130,
    textAlignVertical: "top",
    borderRadius:10,
    color:"white",
    fontSize:14,
  },

  addImage:{
    position:"absolute",
    right:15,
    top:-55,
    padding:10
  },
  setting:{
    color:"rgba(255, 255, 255, 0.4)",
    fontSize:17,
    padding:15
  },

  flex:{
    flexDirection:"row",
    backgroundColor:"rgba(255, 255, 255, 0.2)",
    justifyContent:"space-between",
    alignItems:"center",
    padding:5,
    margin:15,
    marginTop:0,
    marginBottom:0,
  },

  settingTwo:{
    padding:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },

   settingOne:{
    padding:10,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
  },

  heaa:{
    fontSize:14,
    fontWeight:"500",
    color:"rgba(255, 255, 255, 0.52)"
  },

  flexTwo:{
    backgroundColor:"transparent"
  },


  ddde:{
    color:"rgba(255, 255, 255, 0.52)",
    fontSize:13,
    marginRight:10,
  },

  ion:{
    marginRight:-20
  },

  btnDot:{
    width:25,
    height:25,
    marginRight:10
  },

  btnText:{
    color:"black"
  },

  btn:{
    backgroundColor:"white",
    flexDirection:"row",
    padding:10,
    justifyContent:"center",
    alignItems:"center",
    fontSize:14,
    margin:10,
    position:"absolute",
    bottom:50,
    width:"94%",
    borderRadius:10,
  }
});

import React, {Component} from 'react';
import {View,Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from "react-native";

const backgroundImage = { uri: "https://blog.myfitnesspal.com/wp-content/uploads/2017/12/Essential-Guide-to-Healthy-Eating-2.png" };

class mainMenu extends Component{
    render(){
        return(
            <View style={styles.screen}>
                <ImageBackground source={backgroundImage} style={styles.image}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Maisto Kategorijos')}
                    style={styles.gridItem}>
                    <Text style={styles.appButtonText}>Meniu</Text>
                  </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    logo: {
      width: '90%',
      height: 200,
      resizeMode: 'cover',
      alignSelf: 'center'
    },
    gridItem: {
      margin: 15,
      height: 50,
      backgroundColor: 'dodgerblue',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    appButtonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
    },
  });

export default mainMenu;
import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import 'react-native-gesture-handler';
import axios from 'axios';

const backgroundImage = { uri: "https://envato-shoebox-0.imgix.net/e021/4e7e-ce19-4b59-bc07-62e4a82420d6/AD4A7622.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=cfe84ac1775c1689fe632a44d36f43cb" };

class listKat extends Component{
    
    constructor() {
        super();
        this.state = {
          data: [],
        };
      }

      componentDidMount = () => {
        axios
          .get('https://my-json-server.typicode.com/Weazzzzzzey/ReactAntras/Kategorijos')
          .then((res) => {
            const Data = res.data;
            //console.log(Data);
            this.setState({
              data: Data,
            });
          });
      };
  
    render(){
        
        const renderListKat = (itemData) =>{
            return (
                <View>
                    <TouchableOpacity
                        onPress={() => 
                        this.props.navigation.navigate('Patiekalai', {
                            katid: itemData.item.katid,
                            inside: itemData.item.patiekalai,
                        })
                    }
                    style={styles.gridItem}>
                    <Text style={styles.appButtonText}>{itemData.item.katName}</Text>
                    </TouchableOpacity>
                </View>
            );
        };
        
        return(
            <ImageBackground source={backgroundImage} style={styles.image}>
                <FlatList 
                  data={this.state.data}
                  renderItem={renderListKat}
                  keyExtractor={(item,index) => item.katid.toString()}
                />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    logo: {
      width: '50%',
      height: 50,
      resizeMode: 'cover',
    },
    image: {
      flex: 1,
      height: '100%',
      width: '100%',
      resizeMode: "cover",
      justifyContent: "center",
      
    },
    gridItem: {
      flex: 1,
      margin: 5,
      height: 50,
      backgroundColor: 'dodgerblue',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    appButtonContainer: {
      backgroundColor: '#089668',
      borderRadius: 10,
    },
    appButtonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
    },
  });
  export default listKat;
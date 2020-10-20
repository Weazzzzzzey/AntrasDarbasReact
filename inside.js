import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ImageBackground} from 'react-native';
import 'react-native-gesture-handler';

const backgroundImage = { uri: "https://envato-shoebox-0.imgix.net/e021/4e7e-ce19-4b59-bc07-62e4a82420d6/AD4A7622.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=cfe84ac1775c1689fe632a44d36f43cb" };

class inside extends Component {
    
    render() {
        const katid = this.props.route.params.katid;
        const inside = this.props.route.params.inside;

        const renderGridItem =(itemData) => {
            return(
                <View>
                    <TouchableOpacity>
                      <Text style ={styles.fointChanges}>{itemData.item.name}</Text>
                      <Text style ={styles.fointChangesTwo}> Reikės: {itemData.item.ingridientai}</Text>
                      <Text style ={styles.fointChangesTwo}> Gaminimas: {itemData.item.gaminimas}</Text>
                      <Image style={styles.logo} source={{uri: itemData.item.uri}} />
                    </TouchableOpacity>
                </View>
            );
        };

        return (
          <ImageBackground source={backgroundImage} style={styles.image}>
            <FlatList
              data={inside}
              renderItem={renderGridItem}
              keyExtractor={(item, index) => item.key}
            />
          </ImageBackground>
        );
    }
  }

const styles = StyleSheet.create({
    logo: {
      width: '90%',
      height: 100,
      resizeMode: 'cover',
      alignSelf: 'center',
    },
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      flex: 1,
      height: '100%',
      width: '100%',
      resizeMode: "cover",
      justifyContent: "center",
    },
    fointChanges: {
      fontSize: 18,
      color: 'green',
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    fointChangesTwo: {
      fontSize: 14,
      color: '#000000',
      alignSelf: 'center',
    },
  });

export default inside;
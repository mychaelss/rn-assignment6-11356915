// src/screens/HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CartContext } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';

import logo from '../assets/Logo.png';

const items = [
    { id: '1', name: 'Office Wear', price: '$120', image: require('../assets/dress1.png') },
    { id: '2', name: 'Black', price: '$120', image: require('../assets/dress2.png') },
    { id: '3', name: 'Church Wear', price: '$120', image: require('../assets/dress3.png') },
    { id: '4', name: 'Lamerei', price: '$120', image: require('../assets/dress4.png') },
    { id: '5', name: '21WN', price: '$120', image: require('../assets/dress5.png') },
    { id: '6', name: 'Lopo', price: '$120', image: require('../assets/dress6.png') },
    { id: '7', name: '21WN', price: '$120', image: require('../assets/dress7.png') },
    { id: '8', name: 'Lame', price: '$120', image: require('../assets/dress6.png') },
];

const HomeScreen = () => {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>reversible angora cardigan</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <View style={styles.actionIcons}>
                <TouchableOpacity onPress={() => addToCart(item)}>
                    <Icon name="plus-circle" size={24} color="black" style={styles.itemIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeFromCart(item)}>
                    <Icon name="minus-circle" size={24} color="black" style={styles.itemIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Icon name="bars" size={24} color="black" style={styles.iconLeft} />
                <View style={styles.tittle}>
                <Image source={logo} style={styles.logoTitle} />
                </View>
                <View style={styles.iconsRight}>
                    <Icon name="search" size={24} color="black" style={styles.icon} />
                    <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                        <View>
                            <Icon name="shopping-cart" size={24} color="black" style={styles.icon} />
                            {cartItems.length > 0 && (
                                <View style={styles.cartBadge}>
                                    <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.subHeader}>
                <Text style={styles.subHeaderText}>Our Story</Text>
                <View style={styles.iconsRight}>
                    <View style={styles.iconCircle}>
                        <Icon name="th-list" size={20} color="black" />
                    </View>
                    <View style={styles.iconCircle}>
                        <Icon name="filter" size={20} color="black" />
                    </View>
                </View>
            </View>

            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.list}
                scrollEnabled={false} // Disable FlatList scrolling
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    iconLeft: {
        flex: 1,
    },
    title: {
        flex: 2,
        textAlign: 'center',
        
    },
    iconsRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    icon: {
        marginLeft: 20,
    },
    cartBadge: {
        position: 'absolute',
        top: -5,
        right: -10,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartBadgeText: {
        color: 'white',
        fontSize: 12,
    },
    subHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        marginTop: 20,
    },
    subHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    iconCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    list: {
        paddingVertical: 20,
    },
    itemContainer: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
    },
    itemImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
    },
    itemDescription: {
        fontSize: 14,
        color: '#888',
        marginLeft: 10,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
        marginLeft: 10,
        marginBottom: 10,
    },
    actionIcons: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    itemIcon: {
        marginLeft: 10,
    },
});

export default HomeScreen;

// src/screens/CheckoutScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CartContext } from '../context/CartContext';

import logo from '../assets/Logo.png';

const CheckoutScreen = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name.toUpperCase()}</Text>
                <Text style={styles.itemDescription}>Recycle Boucle Knit Cardigan Pink</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item)} style={styles.removeItemIcon}>
                <Icon name="times-circle" size={24} color="red" />
            </TouchableOpacity>
        </View>
    );

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + parseFloat(item.price.substring(1)), 0);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <View style={styles.title2}>
                <Image source={logo} style={styles.logoTitle} />
            </View>
                <Icon name="search" size={24} color="black" />
            </View>
            
            {cartItems.length > 0 ? (
                <FlatList
                    data={cartItems}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listContent}
                />
            ) : (
                <Text style={styles.emptyCartText}>Your cart is empty</Text>
            )}
            <View style={styles.footer}>
                <Text style={styles.totalText}>EST. TOTAL</Text>
                <Text style={styles.totalPrice}>${getTotalPrice()}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    title2: {
        alignItems: 'center',
        paddingLeft: 120,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
        textAlign: 'center',
    },
    
    listContent: {
        paddingHorizontal: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingTop: 20,
    },
    itemImage: {
        width: 100,
        height: 155,
        borderRadius: 10,
        marginRight: 20,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 14,
        color: '#888',
        marginVertical: 5,
    },
    itemPrice: {
        fontSize: 16,
        color: 'red',
    },
    removeItemIcon: {
        marginLeft: 10,
    },
    emptyCartText: {
        fontSize: 18,
        color: '#888',
        textAlign: 'center',
        marginTop: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    totalText: {
        fontSize: 18,
        color: '#888',
    },
    totalPrice: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
    },
    checkoutButton: {
        backgroundColor: 'black',
        padding: 20,
        alignItems: 'center',
    },
    checkoutButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default CheckoutScreen;

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView } from "react-native";

const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
})

const ItemCard = ({ item }) => (
    <View style={styles.itemCard}>
        <Image source={{uri: item.img_link}} style={{ width: 155, height: 90}}></Image>
        <View style={{justifyContent: 'space-evenly'}}>
            <Text style={{fontSize: 14}}>{item.name}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                <Image source={require('../assets/rated.png')} style={{width: 100, height: 'auto'}}></Image>
                <Text style={{fontSize: 13, marginLeft: 10}}>({item.rated})</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 14}}>{formatter.format(item.cost)}  </Text>
                <Text style={{fontSize: 12, color: 'gray'}}>-{item.discount}%</Text>
            </View>
        </View>
    </View>
);

const TwoColumn = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('https://66f5f930436827ced97591ce.mockapi.io/api/lab04/items2')
        .then(response => response.json())
        .then(json => setItem(json))
    }, []);

    const renderItem = ({ item }) => {
        return <ItemCard item={item} />;
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList style ={{flex: 1, width: '100%'}}
                data={item}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
                contentContainerStyle={{justifyContent: 'space-between'}}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    itemCard: {
        flex: 1,
        height: 200,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 10,
    }
});

export default TwoColumn;
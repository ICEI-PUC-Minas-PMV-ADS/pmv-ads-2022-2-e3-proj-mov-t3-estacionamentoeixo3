import React from 'react';
import {StyleSheet, View} from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import {Avatar, Text, TextInput, useTheme} from "react-native-paper";

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 300,
        width:'100%',


    },

    map: {
        ...StyleSheet.absoluteFillObject,
    },
    title: {
        fontSize: 16,
        color: '#FFF',
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 10,
    },
});
export const MapsComponent = () => {
    const themeStyle = useTheme();
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude: -19.93888314388663,
                    longitude: -44.07603641565521,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,

                }}
            >
                <Marker coordinate={{
                    latitude: -19.93888314388663,
                    longitude: -44.07603641565521
                }}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.title} theme={{
                            colors: {
                                background: themeStyle.colors.background,
                                color: themeStyle.colors.background
                            }
                        }}>WhyPark</Text>
                        <Avatar.Icon size={32} icon="car" theme={{
                            colors: {
                                background: 'red',
                                color: 'red',
                                notification: "#908FDC",
                                suferace: "#262626",
                                accent: "#F27D16",
                                disabled: "#959595",
                                text: "#000",
                            }
                        }}/>
                    < /View>
                </Marker>
            </MapView>
        </View>
    )
};

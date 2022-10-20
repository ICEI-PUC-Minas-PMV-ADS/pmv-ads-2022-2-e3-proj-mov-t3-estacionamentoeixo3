import React from 'react';
import {StyleSheet, View} from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import {Avatar, TextInput} from "react-native-paper";

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 300,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
export const MapsComponent = () => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                add
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
                    <Avatar.Icon
                        size={24}
                        style={{backgroundColor:'red'}}
                        theme={{color:'red'}}
                        color={'#fff'}
                        icon={"car"}
                    />
                </Marker>
            </MapView>
        </View>
    )
};

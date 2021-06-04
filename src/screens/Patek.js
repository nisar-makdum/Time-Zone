import React from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SwiperComponentPatek from '../components/SwiperComponentPatek'

const Patek = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#FFF",

        }}>
            <View style={{
                flexDirection: "row",
                width: "100%",
                height: "90%"
            }}>
                <View style={{ width: "10%", paddingLeft: 20 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../images/17.png')}
                            style={{ marginVertical: 40 }}
                        />
                    </TouchableOpacity>
                    
                </View>
                <View style={{ width: "90%" }}>
                    <SwiperComponentPatek />
                </View>
            </View>

            <View style={{
                flexDirection: "row",
                marginTop: -80,
                marginHorizontal: 20,
                alignItems: "center"
            }}>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 28,
                    color: "#00008B"
                }}>
                    Rolex
                            </Text>
                <Text style={{
                    fontWeight: "bold",
                    color: "#800000",
                    paddingLeft: 170,
                    fontSize: 20
                }}>
                    $1200
                </Text>
            </View>

            <Text style={{
                paddingHorizontal: 20,
                fontWeight: "bold",
                color: "#000",
                paddingTop: 3,
                fontSize: 20
            }}>
                Series II
                        </Text>

            <View style={{
                flexDirection: "row",
                width: "100%"
            }}>
                <View style={{
                    width: "50%",
                    backgroundColor: "#483D8B",
                    height: 70,
                    marginTop: 20,
                    borderTopRightRadius: 25,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert('Thank You', 'Your Product Has Been Successfully Bought.', [
                                {
                                    text: 'Done'
                                }
                            ])
                        }}>
                        <Text style={{
                            color: "#FFF",
                            fontSize: 17
                        }}>Buy Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    width: "50%",
                    backgroundColor: "#ADD8E6",
                    height: 70,
                    marginTop: 20,
                    borderTopLeftRadius: 25,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <TouchableOpacity
                    onPress={() => {
                        Alert.alert('Description', 'Everyone looks at your watch and it represents who you are, your values and your personal style.', [
                            {
                                text: 'Cancel'
                            }
                        ])
                    }}>
                    <Text style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 17
                    }}>Description</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
export default Patek;
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     memContainer: {
         marginTop:20,
         marginBottom: 20,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 6,
        padding: 10,
        shadowOpacity: 5,
        elevation: 2,
    },
    image: {
        width: 300,
        height:300
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
    },
    vote: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
   
})
import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.bgScreen
    },
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid: {
        height: Dimensions.get('window').height/4,
        width: '100%',
        paddingHorizontal: 37
    },
    boxBottom: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center'
    },
    input: {
        height: '100%',
        width: '90%',
        borderRadius: 40,
        paddingLeft: 5
    },
    boxInputEmail: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: themas.colors.lighGray,
        backgroundColor: themas.colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    boxInputSenha: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: themas.colors.lighGray,
        backgroundColor: themas.colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 10
    },
    title: {
        fontWeight: 'bold',
        color: 'gray',
        marginTop: 20,
        marginLeft: 5
    },
    button: {
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        marginTop: 40
    }
});
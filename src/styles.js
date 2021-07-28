import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    nav : {
        position: 'absolute',
        bottom: 0,
        flex: 1,
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    btn: {
        padding: 15
    },
    main : {
        height: '100%'
    },
    maincontent : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainLink : {
        backgroundColor: '#000',
        padding: 5
    },
    maintext2 : {
        color: '#fff'
    },
    page: {
        height: '100%',
        backgroundColor: '#e5e5e5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sliderWrapper : {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    slideImg: {
        width: 250,
        height: 200
    },
    buttonbottom: {
        position: 'relative'
    },
    pageBottomNav: {
        position: 'absolute',
        top: 450,
        flex: 1,
        alignItems: 'center'
    },
    switchbtn: {
        padding: 5,
        marginBottom: 20
    },
    player: {
        flex: 1,
        alignItems: 'center',
        marginTop: 200
    },
    playerNav: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        height: 200
    },
    playerImg: {
        width: 70,
        height: 70
    },
    authors: {
        fontSize: 30,
        marginBottom: 340
    }
})  

export default styles


import { Text, View, StyleSheet } from 'react-native';

export default Details = ({route, navigation}) =>{
    const {firstName, lastName} = route.params.data;
    return (
        <View style={styles.container}>
            <Text>{firstName} {lastName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 60,
    }
})
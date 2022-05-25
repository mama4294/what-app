import { StyleSheet,Text, View, Button } from 'react-native';


export default LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button onPress={() => navigation.navigate('Contacts')} title="Login"/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
  },
});
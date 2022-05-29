import { StyleSheet,Text, View, Button } from 'react-native';


const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
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

export default LoginScreen;
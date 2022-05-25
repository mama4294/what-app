import { FlatList, StyleSheet, TouchableOpacity, Alert, Text, View, TextInput  } from 'react-native';
import { useContext, useState } from 'react';
import { ContactsContext } from '../contexts/ContactsContext';
import SearchBar from '../components/searchBar';

export default function Contacts({ navigation }) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  return (
    <View>
      <SearchBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} searchFocused={searchFocused} setSearchFocused={setSearchFocused}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ContactsGallery navigation={navigation} searchPhrase={searchPhrase}/>
    </View>
  );
}



export const ContactsGallery = ({navigation, searchPhrase}) => {
  const {contacts} = useContext(ContactsContext);
  let filteredContacts = contacts;
  if(searchPhrase.length > 0){
    filteredContacts = contacts.filter(contact => contact.firstName.includes(searchPhrase) || contact.lastName.includes(searchPhrase));
  }
  const sortedContacts = filteredContacts.sort((a,b) => {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    return 0;
  })
  return(
    <FlatList
      style={styles.gallery}
      data={sortedContacts}
      renderItem={({item}) => (
        <ContactItem data={item} navigation={navigation}/>
      )}
      keyExtractor={item => item.id.toString()}
    />
  )
}



const ContactItem = ({data, navigation}) => {
  const {firstName, lastName} = data;
  const handlePress = () =>{
    navigation.navigate('Details', {data: data})
  }
  return(
  <View
    style={styles.contact}>
    <TouchableOpacity
      onPress={handlePress}
    >
    <Text style={{fontSize: 14}}>{firstName} {lastName}</Text>
    </TouchableOpacity>
  </View>
  )
};


const styles = StyleSheet.create({
  gallery:{
    backgroundColor: 'transparent',
    height: '100%',
  },
  contact:{
    borderRadius: 1,
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 2,
  },
  separator: {
    marginVertical: 3,
    backgroundColor: 'gray',
    height: 1,
    width: '100%',
  },
});

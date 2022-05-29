import { StyleSheet, TextInput, View, TouchableOpacity, Text, Keyboard, Button } from "react-native"
import { Fontisto, Feather } from '@expo/vector-icons';

const SearchBar = ({searchPhrase, setSearchPhrase, searchFocused, setSearchFocused}) =>{

    const clearSearchPhrase = () => {
        setSearchPhrase("")
    }

    return (
        <View style={styles.container}>
            <View  style={ searchFocused ? styles.searchBar__focused: styles.searchBar__notFocused}>
                <Fontisto name="search" size={20} color="gray" style={{marginLeft:1}} />
                <TextInput 
                    style={styles.input}
                    placeholder="search"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => setSearchFocused(true)}
                    />
                    {searchFocused &&
                    <TouchableOpacity style={{ padding: 1 }} onPress={clearSearchPhrase}>
                        <Feather name="x-circle" size={20} color="gray" />
                    </TouchableOpacity>
                    }
            </View>
                {searchFocused && 
                <View>
                <Button
                    title="Cancel"
                    onPress={() => {
                        Keyboard.dismiss();
                        setSearchFocused(false);
                      }}
                    />
                </View>
                }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    },
    searchBar__notFocused: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
      },
      searchBar__focused: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
      },
    input: {
        marginLeft: 10,
        width: "90%"
    },

})

export default SearchBar
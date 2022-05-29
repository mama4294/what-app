import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {removeContact} from "../contexts/ContactsContext"

const Details = ({route, navigation}) =>{
    const {id, firstName, lastName, birthday} = route.params.data;
    const initials = firstName[0] + lastName[0];
    const getAge = (birthday) => {
      if (!birthday) return null;
      const ageDifMs = Date.now() - new Date(birthday).getTime();
      const ageDate = new Date(ageDifMs);
      return Math.round((Math.abs(ageDate.getUTCFullYear() - 1970) + ageDate.getUTCMonth() / 12 )* 10)/10;
    }
    const age = getAge(birthday);

    const [displayModeEdit, setDisplayModeEdit] = useState(false);
    const { handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: route.params.data
      });
     


    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            displayModeEdit? 
            <Button onPress={() => setDisplayModeEdit(false)} title="Cancel" /> :
            <Button onPress={() => navigation.goBack()} title={displayModeEdit? "Cancel": "Back"} />
            ),
          headerRight: () => (
            displayModeEdit ? 
            <Button onPress={handleSubmit(onSubmit)} title="Save" /> :
            <Button onPress={() => setDisplayModeEdit(true)} title="Edit" />
            ),
        });
      }, [navigation, displayModeEdit]);


      const onChange = arg => {
        return {
          value: arg.nativeEvent.text,
        };
      };
    
      const onSubmit = data => {
        // alert(JSON.stringify(data));
        const test = {firstName: 'test', lastName: 'test', birthday: 'test'};
        removeContact(id)
        // updateContact(test);
        navigation.goBack()
      };


    return (
        <View style={styles.container}>
          {!displayModeEdit &&
            <View style={styles.titleContainer}>
              <Text style={styles.initials}>{initials}</Text>
               <Text style={styles.title}>{firstName} {lastName}</Text>
            </View>
        }
           {displayModeEdit && <Controller
                control={control}
                render={({field: { onChange, onBlur, value }}) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    placeholder="First Name"
                />
                )}
                name="firstName"
                rules={{ required: false }}
            />
                }
            {displayModeEdit &&  
            <Controller
                control={control}
                render={({field: { onChange, onBlur, value }}) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    placeholder="Last Name"
                />
                )}
                name="lastName"
                rules={{ required: false }}
            />  
                }

            {birthday &&    
            <View style={styles.dataContainer}>
              <Text style={styles.label}>Birthday</Text>
              <Text style={styles.text}>{birthday.toLocaleDateString()}</Text>
              <Text style={styles.text}>{age} years old</Text>
            </View>
            }
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: 'transparent',
  }, 
  label: {
    color: 'gray',
    margin: 4,
  },
  text: {
    color: '#ec5990',
    margin: 4,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    marginBottom: 8,
  },
  initials:{
    fontSize: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    textAlign: 'center',
    color: 'white',
    padding: 8,
    margin:2,
    backgroundColor: '#ec5990',
  },
  title: {
    fontSize: 20,
    margin: '0px auto',
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
    marginBottom: 4,
  },
  dataContainer:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
  }
});

export default Details;
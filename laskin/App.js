import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, TouchableNativeFeedback, Keyboard } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [numberOne, setNumberOne] = useState('');
  const [numberTwo, setNumberTwo] = useState('');
  const [result, setResult] = useState(null);

  const handlePlus = () => {
    setResult(numberOne + numberTwo);
    setNumberOne('');
    setNumberTwo('');
  };

  const handleMinus = () => {
    setResult(numberOne - numberTwo);
    setNumberOne('');
    setNumberTwo('');
  };
  
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
   
  return (
    <TouchableNativeFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Result: {result === null ?  null : result}</Text>
            <TextInput value={numberOne} keyboardType='number-pad' style={styles.inputBox} placeholder='Number one' onChangeText={value => setNumberOne(parseInt(value))}/>
            <TextInput value={numberTwo} keyboardType='number-pad' style={styles.inputBox} placeholder='Number Two' onChangeText={value => setNumberTwo(parseInt(value))}/>
          </View>

          <View style={styles.buttonContainer}>
            <Pressable onPress={handlePlus} style={({ pressed }) => [
                { backgroundColor: pressed ? 'lightblue' : 'blue'},
                styles.pressable
              ]}>
              <Text style={{fontSize: 25, color: 'white'}}>+</Text>
            </Pressable>
            
            <Pressable onPress={handleMinus} style={({ pressed }) => [
                { backgroundColor: pressed ? 'lightblue' : 'blue'},
                styles.pressable
              ]}>
              <Text style={{fontSize: 25, color: 'white'}}>-</Text>
            </Pressable>
          </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },

  pressable: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },

  inputBox: {
    fontSize: 25, 
    paddingHorizontal: 50, 
    padding: 10
  },

  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  resultText: {
    fontSize: 25, 
    padding: 5
  },

  inputbox: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
  },

  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 200,
  },
});

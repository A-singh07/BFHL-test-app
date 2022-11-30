import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import * as Yup from 'yup';
import { MotiView } from 'moti'
import InputField from '../components/InputField';
import Button from '../components/Button';

const SignupScreen = ({ navigation }) => {

  // Form Schema
  let schema = Yup.object().shape({
    name: Yup.string().required("Required full name"),
    age: Yup.number().required("Required age").min(18, "Min age must be 18"),
    email: Yup.string().email("Invalid email").required("Required email"),
    password: Yup.string()
      .min(8, "at least 8 characters required")
      .required("Required password"),
    cnfPassword: Yup.string()
      // .equals(Yup.ref('password'), "Passwords don't match")
      .required("Required confirm password")
  })

  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    email: '',
    password: '',
    cnfPassword: '',
  })

  const handleSignup = () => {

    schema.validate(formData)
      .then((value) => {
        // console.log("Value:", value)
        Alert.alert('Signup successful! Please login')
        navigation.navigate('Login')
      })
      .catch(err => {
        Alert.alert("Fill the form correctly!")
        // console.log("Error:", JSON.parse(JSON.stringify(err.inner)))
      })

  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Signup</Text>
      <View style={styles.formContainer}>
        <MotiView
          from={{ left: 100, opacity: 0 }}
          animate={{ left: 0, opacity: 1 }}
        >
          <InputField
            placeholder={"Name"}
            value={formData.name}
            onChangeText={name => setFormData({ ...formData, name: name })}
          />
        </MotiView>
        <MotiView
          from={{ left: 100, opacity: 0 }}
          animate={{ left: 0, opacity: 1 }}
          delay={70}
        >
          <InputField
            placeholder={"Age"}
            value={formData.age}
            keyboardType={'numeric'}
            onChangeText={age => setFormData({ ...formData, age: age })}
          />
        </MotiView>
        <MotiView
          from={{ left: 100, opacity: 0 }}
          animate={{ left: 0, opacity: 1 }}
          delay={100}
        >
          <InputField
            placeholder={"Email"}
            value={formData.email}
            textContentType={'emailAddress'}
            keyboardType={"email-address"}
            onChangeText={email => setFormData({ ...formData, email: email })}
          />
        </MotiView>
        <MotiView
          from={{ left: 100, opacity: 0 }}
          animate={{ left: 0, opacity: 1 }}
          delay={130}
        >
          <InputField
            placeholder={"Password"}
            value={formData.password}
            textContentType={"password"}
            secureTextEntry={true}
            onChangeText={pass => setFormData({ ...formData, password: pass })}
          />
        </MotiView>
        <MotiView
          from={{ left: 100, opacity: 0 }}
          animate={{ left: 0, opacity: 1 }}
          delay={160}
        >
          <InputField
            placeholder={"Confirm Password"}
            value={formData.cnfPassword}
            textContentType={"password"}
            secureTextEntry={true}
            onChangeText={pass => setFormData({ ...formData, cnfPassword: pass })}
          />
        </MotiView>
      </View>

      <Button
        text={'Signup'}
        onPress={handleSignup}
        customStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
      />

      <Text style={styles.text}>
        Already have an account? &nbsp;
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    paddingVertical: 70,
    backgroundColor: '#F3F1FF'
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4B4B4B',
    marginBottom: 32
  },
  text: {
    marginTop: 150,
    textAlign: 'center',
    fontSize: 18,
    color: '#4B4B4B',
  },
  formContainer: {
    marginBottom: 16
  },
  signupText: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#7B5BA8'
  }
})

export default SignupScreen
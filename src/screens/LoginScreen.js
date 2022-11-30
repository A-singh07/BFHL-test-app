import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Lottie from 'lottie-react-native';
import { MotiView } from 'moti'
import InputField from '../components/InputField';
import Button from '../components/Button';
import loginLottie from '../assets/Login.json'

const LoginScreen = ({ navigation }) => {

  const dispatch = useDispatch();

  // Form Schema
  let schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required email"),
    password: Yup.string().required("Required password"),
  })

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = () => {
    schema.validate(formData)
      .then((value) => {
        const data = {
          ...value,
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
        }
        dispatch({ type: 'AUTH_USER', payload: data })
      })
      .catch(err => {
        Alert.alert("All fields required!")
        // console.log("Error:", JSON.parse(JSON.stringify(err.inner)))
      })

  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.heading}>Login</Text>
        <View style={styles.lottieContainer}>
          <Lottie source={loginLottie} autoPlay loop />
        </View>
      </View>
      <View style={styles.formContainer}>
        <MotiView
          from={{ left: 100, opacity: 0 }}
          animate={{ left: 0, opacity: 1 }}
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
          delay={70}
        >
          <InputField
            placeholder={"Password"}
            value={formData.password}
            textContentType={"password"}
            secureTextEntry={true}
            onChangeText={pass => setFormData({ ...formData, password: pass })}
          />
        </MotiView>
      </View>

      <Button
        text={'Login'}
        onPress={handleLogin}
        customStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
      />

      <Text style={styles.text}>
        Don't have an account? &nbsp;
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate('Signup')}
        >
          Signup
        </Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    paddingVertical: 100,
    backgroundColor: '#F3F1FF'
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4B4B4B',
    marginBottom: 32
  },
  lottieContainer: {
    width: 50,
    height: 50
  },
  text: {
    marginTop: 300,
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

export default LoginScreen
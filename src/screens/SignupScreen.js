import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import * as Yup from 'yup';
import { MotiView } from 'moti';
import moment from 'moment';
import InputField from '../components/InputField';
import Button from '../components/Button';

const SignupScreen = ({ navigation }) => {

  // Form Schema
  let schema = Yup.object().shape({
    name: Yup.string().required("Required full name"),
    dob: Yup.string().required(),
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
    dob: '',
    email: '',
    password: '',
    cnfPassword: '',
  })
  const [showErrors, setShowErrors] = useState([]);

  const [dob, setDob] = useState({
    date: 0,
    month: 0,
    year: 0
  })
  const [age, setAge] = useState(0)

  useEffect(() => {
    if (!(dob.date && dob.month && dob.year.length === 4)) return

    const dobInput = `${dob.date}/${dob.month}/${dob.year}`
    setFormData({ ...formData, dob: dobInput })

    const ageCalc = moment(dobInput, "DD/MM/YYYY").fromNow(true)
    setAge(ageCalc);
  }, [dob])

  const handleSignup = () => {
    // schema.isValid(formData)
    //   .then(res => {
    //     if (!res) return setShowErrors("Invalid inputs")
    //     Alert.alert("Signup successful!")
    //     navigation.navigate('Login')
    //   })

    schema.validate(formData)
      .then((value) => {
        Alert.alert("Signup successful!")
        navigation.navigate('Login')
      })
      .catch(err => {
        setShowErrors(err.errors)
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
            error={showErrors.length > 0}
            onChangeText={name => setFormData({ ...formData, name: name })}
          />
        </MotiView>
        <MotiView
          from={{ left: 100, opacity: 0 }}
          animate={{ left: 0, opacity: 1 }}
          delay={70}
        >
          <Text style={styles.dobHeading}>Date of Birth</Text>
          <View style={styles.dobContainer}>
            <View style={styles.dobItem}>
              <InputField
                placeholder={"Date"}
                value={dob.date}
                keyboardType={'numeric'}
                maxLength={2}
                helperText={`Age: ${age}`}
                error={showErrors.length > 0}
                onChangeText={num => setDob({ ...dob, date: num })}
              />
            </View>
            <View style={styles.dobItem}>
              <InputField
                placeholder={"Month"}
                value={dob.month}
                keyboardType={'numeric'}
                maxLength={2}
                error={showErrors.length > 0}
                onChangeText={num => setDob({ ...dob, month: num })}
              />
            </View>
            <View style={styles.dobItem}>
              <InputField
                placeholder={"Year"}
                value={dob.year}
                keyboardType={'numeric'}
                maxLength={4}
                error={showErrors.length > 0}
                onChangeText={num => setDob({ ...dob, year: num })}
              />
            </View>
          </View>
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
            error={showErrors.length > 0}
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
            error={showErrors.length > 0}
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
            error={showErrors.length > 0}
            onChangeText={pass => setFormData({ ...formData, cnfPassword: pass })}
          />
        </MotiView>
        {
          showErrors.map((error, i) =>
            <Text key={i} style={styles.errorMsg}>{error}</Text>
          )
        }
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
    marginTop: 100,
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
  },
  dobHeading: {
    color: '#a7a7a7',
    marginBottom: 5
  },
  dobContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dobItem: {
    width: '30%'
  },
  errorMsg: {
    color: 'red',
    marginBottom: 8,
    marginLeft: 10
  },
})

export default SignupScreen
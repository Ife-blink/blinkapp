import { StyleSheet, Text, View, Pressable} from 'react-native'
import React,{useState} from 'react'
import SignupName from './screens/SignupName'
import SignupPassword from './screens/SignupPassword'
import SignupEmail from './screens/SignupEmail'

const Signup = () => {
  //Steps
  const [activeStep, setActiveStep] = useState(0)

  const getSteps = () => {
    return ["SignupName", "SignupPassword", "SignupEmail"]
  }

  const steps = getSteps()

  //State variables
  const [multiFormValues, setMultiFormValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  })

  //Navigates to the next page
  const handleNext = () => {
    setActiveStep((nextStep) => nextStep + 1)
  }
  //Navigates to the Previous page
  const handleBack = () => {
    setActiveStep((previousStep) => previousStep - 1)
  }

  //Handle form value state on change
  const handleChanges = (mytextname) => {
    return (val) => {
        setState({ ...data, [mytextname]: val })
    }
}

  return (
    <View>
      {activeStep === 0 && (
        <SignupEmail values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 1 && (
        <SignupName values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 2 && (
        <SignupPassword values={multiFormValues} handleChange={handleChange} />
      )}

      <Pressable disabled={activeStep === 0}  onPress={handleBack} 
      style={activeStep === 3 ? {display: 'none'} : {}} ><Text>Back</Text></Pressable>

      <Pressable  variant="contained" onPress={handleNext} 
      style={activeStep === 3 ? {display: 'none'} : {}} ><Text>{}
        {activeStep === steps.length - 2 ? 'Submit' : 'Next'}
      </Text>
      </Pressable>

    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})
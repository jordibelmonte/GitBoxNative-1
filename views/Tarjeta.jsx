import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Alert, StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView, ToastAndroid } from 'react-native'
import LottieView from 'lottie-react-native'
import CreditCardForm, { Button } from 'rn-credit-card'

const Tarjeta = (props) => {

  const formMethods = useForm({
    mode: 'onBlur',
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
  })
  const { handleSubmit, formState } = formMethods

  function onSubmit(model) {
    ToastAndroid.show('¡Gracias por su compra!', ToastAndroid.TOP, 25, 50,ToastAndroid.LONG)
    props.navigation.navigate('Home')
  }

  return (
    <FormProvider {...formMethods}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.avoider}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <CreditCardForm
            LottieView={LottieView}
            horizontalStart
            overrides={{
              labelText: {
                marginTop: 16,
              },
            }}
          />
        </KeyboardAvoidingView>
        {formState.isValid && (
          <Button
            style={styles.button}
            title={'CONFIRMAR PAGO!'}
            onPress={handleSubmit(onSubmit)}
          />
        )}
      </SafeAreaView>
    </FormProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'roboto-regular'
  },
  avoider: {
    flex: 1,
    padding: 35,
    fontFamily: 'roboto-regular'
  },
  button: {
    backgroundColor: '#2296f3',
    borderRadius: 0,
    fontFamily: 'roboto-regular'

  },
})

export default Tarjeta
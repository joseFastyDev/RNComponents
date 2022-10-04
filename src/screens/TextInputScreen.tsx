import React, { useContext } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { useForm } from '../hooks/useForm'
import { styles } from '../theme/appTheme'

export const TextInputScreen = () => {

    const { theme: { colors, dividerColor }} = useContext( ThemeContext );

    const { form, onChange, isSuscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribed: false
    });

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height" }
        >
            <ScrollView>
                <View style={ styles.globalMargin }>
                    <HeaderTitle title="TextInputs" />

                    <TextInput
                        style={{ 
                            ...stylesScreen.inputStyle,
                            borderColor: colors.text,
                            color: colors.text
                        }}
                        placeholder="Ingrese su nombre"
                        autoCorrect={ false }
                        autoCapitalize="words"
                        onChangeText={ (value) => onChange( value, 'name' ) }
                        placeholderTextColor={ dividerColor }
                    />

                    <TextInput
                        style={{ 
                            ...stylesScreen.inputStyle,
                            borderColor: colors.text,
                            color: colors.text
                        }}
                        placeholder="Ingrese su email"
                        autoCorrect={ false }
                        autoCapitalize="none"
                        onChangeText={ (value) => onChange( value, 'email' ) }
                        keyboardType="email-address"
                        keyboardAppearance="dark"
                        placeholderTextColor={ dividerColor }
                    />

                    <View style={ stylesScreen.switchRow }>
                        <Text style={{ 
                            ...stylesScreen.switchText,
                            color: colors.text
                        }}
                        >
                            Suscribirse:
                        </Text>
                        <CustomSwitch isOn={ isSuscribed } onChange={ (value) => onChange( value, 'isSuscribed' ) } />
                    </View>

                    <HeaderTitle title={ JSON.stringify( form, null, 3 )} />

                    <HeaderTitle title={ JSON.stringify( form, null, 3 )} />
                    
                    <TextInput
                        style={{ 
                            ...stylesScreen.inputStyle,
                            borderColor: colors.text,
                            color: colors.text
                        }}
                        placeholder="Ingrese su teléfono"
                        onChangeText={ (value) => onChange( value, 'phone' ) }
                        keyboardType="phone-pad"
                        placeholderTextColor={ dividerColor }
                    />


                </View>
                
                <View style={{ height: 100 }}></View>
            
            </ScrollView>
        </KeyboardAvoidingView>
        
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    switchText: {
        fontSize: 25
    }
})

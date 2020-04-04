import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, Input } from 'react-native-elements'
import { useDispatch } from 'react-redux';
import {
    registerUser
} from '../store/creator'


export default function Register(props) {
    const dispatch = useDispatch()
    const { changeModal } = props

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitRegister = () => {
        changeModal(false)
        dispatch(registerUser({
            username, email, password
        }))
    }

    return (
        <View style={styles.modal}>
            <Input
                placeholder="Username"
                leftIcon={
                    <Icon
                        name="user"
                        size={24}
                        color="black"
                        style={{ marginRight: 20 }}
                    />
                }
                onChangeText={(input) => setUsername(input)}
            />
            <Input
                placeholder="email"
                leftIcon={
                    <Icon
                        name="envelope"
                        size={24}
                        color="black"
                        style={{ marginRight: 20 }}
                    />
                }
                onChangeText={(input) => setEmail(input)}
            />
            <Input
                placeholder="password"
                leftIcon={
                    <Icon
                        name="key"
                        size={24}
                        color="black"
                        style={{ marginRight: 20 }}
                    />
                }
                secureTextEntry={true}
                onChangeText={(input) => setPassword(input)}
            />
            <View style={{ marginTop: 10 }}>
                <Button
                    title="Submit"
                    type="solid"
                    onPress={submitRegister}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }
})

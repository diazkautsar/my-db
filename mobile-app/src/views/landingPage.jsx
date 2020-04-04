import React, { useState } from 'react';
import {
    ImageBackground,
    StyleSheet,
    Modal,
    View
} from 'react-native'
import { Button } from 'react-native-elements'
import { useSelector } from 'react-redux';

import Loading from '../components/loading'
import Register from '../components/modalRegister'

const image = { uri: "https://artprojectsforkids.org/wp-content/uploads/2018/05/Cubism.jpg" }

export default function LandingPage() {
    const [modalVisibleRegister, setModalVisibleRegister] = useState(false)

    const loading = useSelector(state => state.userReducer.loading)
    // const msg = useSelector(state => state.userReducer.msg)

    const setModal = (param) => {
        switch (param) {
            case 'register':
                // setMsg(null)
                setModalVisibleRegister(true)
                break;

            default:
                break;
        }
    }

    if (loading) return <Loading />

    return (
        <ImageBackground source={image} style={styles.image}>
            <View>
                <Button
                    title="Register"
                    type="solid"
                    onPress={() => setModal('register')}
                />
            </View>
            <Modal
                animationType="slide"
                visible={modalVisibleRegister}
                onRequestClose={() => {
                    setModalVisibleRegister(false)
                }}
            >
                <Register changeModal={setModalVisibleRegister}/>
            </Modal>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }
})
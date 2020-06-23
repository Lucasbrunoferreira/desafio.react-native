import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import Mailer from 'react-native-mail';

export default function PhotoEmail() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  function takePhoto() {
    ImagePicker.launchCamera({}, async response => {
      const path = `file:/${response.path}`;

      Mailer.mail(
        {
          subject,
          recipients: [email],
          isHTML: true,
          body: `<h2>${body}</h2>`,
          attachment: {
            path,
            type: 'jpg',
            name: response.fileName,
          },
        },
        (error, event) => {
          console.log(error, event);
        },
      );
    });
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Envio de e-mail com anexo:</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaa"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Assunto"
          placeholderTextColor="#aaa"
          onChangeText={text => setSubject(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Mensagem"
          placeholderTextColor="#aaa"
          onChangeText={text => setBody(text)}
        />

        <TouchableOpacity style={styles.button} onPress={() => takePhoto()}>
          <Text style={styles.btnText}>
            <MaterialIcon name="camera-alt" color="#283343" size={20} />
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

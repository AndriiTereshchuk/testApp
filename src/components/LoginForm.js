import React from "react";
import { View } from 'react-native';
import { TextField, SubmitButton, Header } from '.';
import { loginFormStyles } from '../styles';

const LoginForm = props => {
  const { onSubmit } = props;
  return (
      <View style={loginFormStyles.container}>
          <Header />
          <TextField
              title="メールアドレス"
          />
          <TextField
              title="携帯電話番号"
          />
          <View>
              <SubmitButton />
          </View>
      </View>
  )
};

export default LoginForm;

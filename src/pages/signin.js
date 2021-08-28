import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

const schema = yup.object().shape({
  email: yup.string().email('Please enter a valid email address').required(),
  password: yup
    .string()
    .min(4, 'Your password must contain between 4 and 60 characters.')
    .max(60, 'Your password must contain between 4 and 60 characters.')
    .required(),
});

const SignIn = React.forwardRef((props, ref) => {
  const { auth, signIn } = useContext(FirebaseContext);
  const {
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();
  const onSubmit = (data) => {
    signIn(auth, data.email, data.password);
    auth.onAuthStateChanged(auth, (user) => {
      if (user) {
        history.push(ROUTES.BROWSE);
      }
    });
    reset({ email: '', password: '' });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {
            // eslint-disable-next-line operator-linebreak
            (errors.email && <Form.Error>{errors.email?.message}</Form.Error>)
            || (errors.password && <Form.Error>{errors.password?.message}</Form.Error>)
          }
          ;
          <Form.Base onSubmit={handleSubmit(onSubmit)}>
            <Controller
              render={({ field }) => <Form.Input {...field} placeholder="Email address" type="email" ref={ref} />}
              name="email"
              control={control}
              rules={{ required: true }}
              defaultValue=""
            />
            <Controller
              render={({ field }) => <Form.Input {...field} placeholder="Password" type="password" ref={ref} />}
              name="password"
              control={control}
              rules={{ required: true }}
              defaultValue=""
            />
            <Form.Submit type="submit">Sign In</Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign Up Now!</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
});

export default SignIn;

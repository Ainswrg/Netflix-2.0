/* eslint-disable react/display-name */
import { forwardRef, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'Your name must contain between 3 and 20 characters.')
    .max(20, 'Your name must contain between 3 and 20 characters.')
    .required(),
  email: yup.string().email('Please enter a valid email address').required(),
  password: yup
    .string()
    .min(4, 'Your password must contain between 4 and 60 characters.')
    .max(60, 'Your password must contain between 4 and 60 characters.')
    .required(),
});

const SignUp = forwardRef((props, ref) => {
  const { auth, signUp, updateProfile } = useContext(FirebaseContext);
  const [error, setError] = useState('');

  const {
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();
  const onSubmit = (data) => {
    signUp(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        // eslint-disable-next-line prefer-destructuring
        const user = userCredential.user;
        updateProfile(user, { displayName: data.firstName, photoURL: Math.floor(Math.random() * 5) + 1 }).then(
          history.push(ROUTES.BROWSE)
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });

    reset({ firstName: '', email: '', password: '' });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {/* eslint-disable */}
          {(errors.firstName && <Form.Error>{errors.email?.firstName}</Form.Error>) ||
            (errors.email && <Form.Error>{errors.email?.message}</Form.Error>) ||
            (errors.password && <Form.Error>{errors.password?.message}</Form.Error>) ||
            (error && <Form.Error>{error}</Form.Error>)}
          {/* eslint-enable */}

          <Form.Base onSubmit={handleSubmit(onSubmit)}>
            <Controller
              render={({ field }) => <Form.Input {...field} placeholder="Enter your name" type="text" ref={ref} />}
              name="firstName"
              control={control}
              rules={{ required: true }}
              defaultValue=""
            />

            <Controller
              render={({ field }) => (
                <Form.Input {...field} placeholder="Enter your email address" type="email" ref={ref} />
              )}
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
            <Form.Submit type="submit">Sign Up</Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
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

export default SignUp;

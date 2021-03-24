import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as Yup from 'yup';
import { useFormik } from 'formik';
// Redux
import { selectUser } from 'redux/auth/selectors';
import { signInRequest } from 'redux/auth/sign-in/actions'
// UI
import ScreenLayout from 'components/screen-layout';
import SignContainer from 'modules/sign-container';
import Typography from 'components/typography';
import Form from 'components/form';
import FormGroup from 'components/form-group';
import Input from 'components/input';
import Checkbox from 'components/checkbox';
import Button from 'components/button';
// Styles
import './styles.sass';

const validationSchema = Yup.object().shape({
  user: Yup.string().min(2, 'Must have at least 2 characters').required(),
  password: Yup.string().min(2, 'Must have at least 2 characters').required(),
});

const SignIn = ({ signInRequest, user: { loading, userData } }) => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      user: '',
      password: '',
      remember: false
    },
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log('values:', values)
      setSubmitting(true);
      signInRequest(values);
      setSubmitting(false);
      resetForm();
    },
  });

  const { handleSubmit, touched, errors, handleChange, handleBlur, values, isSubmitting } = formik;

  React.useEffect(() => {
    if (userData) {
      return history.push('/');
    }
  }, [userData, history]);

  return (
    <ScreenLayout>
      <SignContainer>
        <Form onSubmit={handleSubmit}>
          <Typography className="sign-in__title" component="h2">Sign in</Typography>
          <FormGroup errorMsg={touched.user && errors.user}>
            <Input
              type="text"
              value={values.user}
              name="user"
              invalid={touched.user && errors.user}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Username"
            />
          </FormGroup>
          <FormGroup errorMsg={touched.password && errors.password}>
            <Input
              type="password"
              value={values.password}
              name="password"
              invalid={touched.password && errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password"
            />
          </FormGroup>
          <FormGroup>
            <Checkbox
              label="Remember me"
              checked={values.remember}
              name="remember"
              onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Button type="submit" variant="primary" size="xl" loading={loading}>Sign In</Button>
          </FormGroup>
          <Link to="/sign-up">
            <span className="sign-in__create">Create a new account</span>
          </Link>
        </Form>
      </SignContainer>
    </ScreenLayout>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

const mapDispatchToProps = {
  signInRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

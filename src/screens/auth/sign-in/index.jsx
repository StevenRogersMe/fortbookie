import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
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

const SignIn = ({ signInRequest, user: { loading } }) => {
  const handleSubmit = e => {
    e.preventDefault();
    signInRequest();
  };

  return (
    <ScreenLayout>
      <SignContainer>
        <Form onSubmit={handleSubmit}>
          <Typography className="sign-in__title" component="h2">Sign in</Typography>
          <FormGroup>
            <Input placeholder="Username" />
          </FormGroup>
          <FormGroup>
            <Input placeholder="Password" />
          </FormGroup>
          <FormGroup>
            <Checkbox label="Remember me" checked={true} onChange={() => { }} />
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

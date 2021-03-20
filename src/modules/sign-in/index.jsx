import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// UI
import SignContainer from 'modules/sign-container';
import Typography from 'components/typography';
import Form from 'components/form';
import FormGroup from 'components/form-group';
import Input from 'components/input';
import Checkbox from 'components/checkbox';
import Button from 'components/button';
// Styles
import './styles.sass';
// Context
import { signInContext } from '../../app';

const SignIn = () => {
  const history = useHistory();
  const { handleSignIn } = React.useContext(signInContext);

  const handleSubmit = e => {
    e.preventDefault()
  };

  return (
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
          <Checkbox label="Remember me" checked={true} />
        </FormGroup>
        <FormGroup>
          <Button type="submit" variant="primary" size="xl" onClick={() => {
            handleSignIn();
            history.push('/events');
          }}>Sign In</Button>
        </FormGroup>
        <Link to="/sign-up">
          <span className="sign-in__create">Create a new account</span>
        </Link>
      </Form>
    </SignContainer>
  );
};

export default SignIn;

import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectUser } from 'redux/auth/selectors';
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

const SignUp = ({ user: { userData } }) => {
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault()
  };

  React.useEffect(() => {
    if (userData) {
      return history.push('/');
    }
  }, [userData, history]);

  return (
    <ScreenLayout>
      <SignContainer>
        <Form onSubmit={handleSubmit}>
          <Typography className="sign-up__title" component="h2">Create an account</Typography>
          <FormGroup>
            <Input placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Input placeholder="Username" />
          </FormGroup>
          <FormGroup>
            <Input placeholder="Password" />
          </FormGroup>
          <FormGroup>
            <Input placeholder="Confirm password" />
          </FormGroup>
          <FormGroup>
            <Checkbox label="I certify that I am of legal gambling age in my juristiction" checked={true} onChange={() => { }} />
          </FormGroup>
          <FormGroup>
            <Checkbox
              label={<>
                <span>I have read and agreed to the</span> <a href="http://example.com" className="sign-up__link">Terms and Conditions</a> <span>of this website</span>
              </>}
              checked={false}
              onChange={() => { }}
            />
          </FormGroup>
          <Button type="submit" variant="primary" size="xl">Register</Button>
        </Form>
      </SignContainer>
    </ScreenLayout>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

export default connect(mapStateToProps)(SignUp);

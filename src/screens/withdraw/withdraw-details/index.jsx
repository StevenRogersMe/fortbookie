import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
// UI
import ContentBox from 'components/content-box';
import Typography from 'components/typography';
import Input from 'components/input';
import Button from 'components/button';
import FormGroup from 'components/form-group';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as LitecoinIcon } from 'assets/images/coins/litecoin.svg';

const validationSchema = Yup.object().shape({
  amount: Yup.number().required('Amount is a required field'),
  address: Yup.string().required('Address is a required field'),
});

const WithdrawDetails = () => {
  const formik = useFormik({
    initialValues: {
      amount: '',
      address: '',
    },
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      setSubmitting(false);
      resetForm();
    },
  });
  const { handleSubmit, touched, errors, handleChange, handleBlur, values } = formik;

  return (
    <ContentBox className="withdraw-details">
      <ContentBox.Header>
        <Typography component="h3">Withdraw</Typography>
      </ContentBox.Header>
      <ContentBox.Body>
        <form className="withdraw-details__content" onSubmit={handleSubmit}>
          <LitecoinIcon className="withdraw-details__icon" />
          <Typography component="p" className="text-medium withdraw-details__title">
            Available to withdraw: <Typography component="span" className="text-bold">$100.00</Typography>
          </Typography>
          <div className="withdraw-details__box">
            <FormGroup label="Withdraw Amount:" errorMsg={touched.amount && errors.amount}>
              <Input
                type="number"
                value={values.amount}
                name="amount"
                invalid={touched.amount && errors.amount}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="$75.00"
              />
              <Typography component="p" variant="p-sm" className="withdraw-details__info">
                Transaction Fee: <Typography component="span" className="text-bold">$0.15</Typography>
              </Typography>
            </FormGroup>
            <FormGroup label="LTC Destination Address:" errorMsg={touched.address && errors.address} last>
              <Input
                type="text"
                value={values.address}
                name="address"
                invalid={touched.address && errors.address}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="3DmdyMxDew8BJPpDGW3hFUzv3jh75sN1jW"
              />
            </FormGroup>
          </div>
          <Button variant="primary" size="xl" type="submit">Withdraw Funds</Button>
        </form>
      </ContentBox.Body>
    </ContentBox>
  );
};

export default WithdrawDetails;

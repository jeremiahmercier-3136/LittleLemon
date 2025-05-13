import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const validationSchema = Yup.object().shape({
    date: Yup.string().required('Date is required'),
    time: Yup.string().required('Time is required'),
    guests: Yup.number()
      .required('Number of guests is required')
      .min(1, 'Minimum 1 guest')
      .max(10, 'Maximum 10 guests'),
    occasion: Yup.string()
  });

  const initialValues = {
    date: new Date().toISOString().split('T')[0],
    time: '',
    guests: '2',
    occasion: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    submitForm(values);
    setSubmitting(false);
  };

  const DateWatcher = () => {
    const { values } = useFormikContext();

    useEffect(() => {
      if (values.date) {
        dispatch(values.date);
      }
    }, [values.date]);

    return null;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="booking-form">
          <DateWatcher />

          <div className="form-group">
            <label htmlFor="date" className="form-label">Choose date</label>
            <Field type="date" id="date" name="date" className="form-input" />
            <ErrorMessage name="date" component="div" className="form-error" />
          </div>

          <div className="form-group">
            <label htmlFor="time" className="form-label">Choose time</label>
            <Field as="select" id="time" name="time" className="form-input">
              <option value="">Select</option>
              {availableTimes.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </Field>
            <ErrorMessage name="time" component="div" className="form-error" />
          </div>

          <div className="form-group">
            <label htmlFor="guests" className="form-label">Number of guests</label>
            <Field
              type="number"
              id="guests"
              name="guests"
              className="form-input"
              min="1"
              max="10"
            />
            <ErrorMessage name="guests" component="div" className="form-error" />
          </div>

          <div className="form-group">
            <label htmlFor="occasion" className="form-label">Occasion</label>
            <Field as="select" id="occasion" name="occasion" className="form-input">
              <option value="">Select</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </Field>
            <ErrorMessage name="occasion" component="div" className="form-error" />
          </div>

          <button type="submit" className="form-submit" disabled={isSubmitting}>
            Make Your Reservation
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default BookingForm;

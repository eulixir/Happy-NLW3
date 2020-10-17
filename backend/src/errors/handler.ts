import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: string[];
}

<<<<<<< HEAD
const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {};

    error.inner.forEach(err => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({ message: 'Validation fails', errors });
=======
const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {};

    error.inner.forEach((err) => {
      errors[err.path] = err.errors;
    });

    return res.status(400).json({ message: 'Validation errors', errors });
>>>>>>> 6645203565b2ebcabceac73ad18154a34b2c81e3
  }

  console.error(error);

<<<<<<< HEAD
  return response.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;
=======
  return res.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;
>>>>>>> 6645203565b2ebcabceac73ad18154a34b2c81e3

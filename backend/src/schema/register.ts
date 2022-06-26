import { z } from 'zod';

const ERROR = {
  NOT_STRING_NAME: '"userName" must be a string',
  NOT_STRING_PASSWORD: '"password" must be a string',
  NOT_EMAIL: '"Email" must be a validate email',
  MIN_CARACTER_NAME: '"username" length must be at least 3 characters long',
  MIN_CARACTER_PASS: '"password" length must be at least 6 characters long',
  EMPTY_NAME: '"username" is required',
  EMPTY_PASSWORD: '"password" is required',
  EMPTY_EMAIL: '"Email" is required',
};

const productSchema = z.object({
  userName: z.string({ 
    required_error: ERROR.EMPTY_NAME,
    invalid_type_error: ERROR.NOT_STRING_NAME,
  }).min(3, { message: ERROR.MIN_CARACTER_NAME }),
  password: z.string({
    required_error: ERROR.EMPTY_PASSWORD,
    invalid_type_error: ERROR.NOT_STRING_PASSWORD,
  }).min(6, { message: ERROR.MIN_CARACTER_PASS }),
  email: z.string({
    required_error: ERROR.EMPTY_EMAIL,
  }).email(ERROR.NOT_EMAIL),
});

export default productSchema;
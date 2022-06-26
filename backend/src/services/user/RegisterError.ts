import BadRequest from '../../error/BadRequest';
import INewUser from './INewUser';
import register from '../../schema/register'

const registerSchema = (user: INewUser) => {
  const validate = register.safeParse(user);
  if (!validate.success) {
    const { issues } = validate.error;
    const { message } = issues[0];
    throw new BadRequest(message);
  }
  return null;
};

export default registerSchema;
import * as Yup from 'yup';
import User from '../models/schemas/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      pass: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json('Validation Fails');
    }

    const userExist = await User.findOne({ email: req.body.email });

    if (userExist) {
      return res.status(400).json('User already exists');
    }

    const user = User.create(req.body);

    return user;
  }
}

export default new UserController();

import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class ForgotPassowrdController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotpasswordEmail = container.resolve(
      SendForgotPasswordEmailService
    );

    await sendForgotpasswordEmail.execute({
      email,
    });

    return response.status(204).json();
  }
}

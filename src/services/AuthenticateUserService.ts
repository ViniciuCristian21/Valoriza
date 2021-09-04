import { compare } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { sign } from "jsonwebtoken"
interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password}: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect")
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }

        const token = sign(
            {
                email: user.email,
            },
            "32f81690a20a67d8f2328a46ba6f1d79",
            {
                subject: user.id,
                expiresIn: "1d",
            }
        );

        return token
    }
}


export { AuthenticateUserService }
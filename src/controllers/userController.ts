// src/controllers/userController.ts
import { UserRepository } from "../repositories/userRepository";
import { User } from "../entities/user";

export const getUsers = async (): Promise<User[]> => {
    const userRepository = await UserRepository.init();
    return userRepository.getAllUsers();
};

export const findUserById = async (id: number): Promise<User | undefined> => {
    const userRepository = await UserRepository.init();
    return userRepository.getUserById(id);
};
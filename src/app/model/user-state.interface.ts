import { UserInterface } from "./user.interface";

export interface UserState {
    users: UserInterface[];
    loggedInUser: UserInterface | null;
    error: string | null;
}
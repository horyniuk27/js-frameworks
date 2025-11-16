export interface User {
    firstName: string;
    lastName: string;
    gender: 'male' | 'female';
    age: number;
    position: string;
    photo: string;
    hobbies: string[];
}

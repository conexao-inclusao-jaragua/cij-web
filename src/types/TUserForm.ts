import { GENDER } from "../constants";

type TUserForm = {
	name: string;
	cpf: string;
	birthDate: string;
	phone?: string;
	gender: GENDER;
	email: string;
	password: string;
};

export default TUserForm;

import JwtService from './jwtService'
export default JwtService

export const apiURL_JWT = 'https://localhost:32774'

export interface IUserResponse {
	displayName: string
	photoURL: string
	token: string
	email: string
	uuid: string
	role: string
}

export interface IErrorResponse {
	message: string
}

export interface IJwtResponse {
	user: IUserResponse
	error: IErrorResponse
}

export interface ICreateUserInput {
	displayName: string
	password: string
	email: string
}

export interface ILoginInput {
	password: string
	email: string
}

export interface IUpdateUserInput {
	uuid: string
	email: string
	displayName: string
	settings: string
}

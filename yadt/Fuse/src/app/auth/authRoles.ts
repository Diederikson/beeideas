/**
 * Authorization Roles
 */
const authRoles = {
	admin: ['Admin'],
	staff: ['Admin', 'Staff'],
	user: ['Admin', 'Staff', 'User'],
	onlyGuest: []
};

export default authRoles;

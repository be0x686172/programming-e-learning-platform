const checkValidEmailInput = (email) => {
	let regex = /^\S+@\S+\.\S+$/;

	return (regex.test(email));
};

export { checkValidEmailInput };

const checkValidEmailInput = (email) => {
	let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	return (regex.test(email));
};

export { checkValidEmailInput };

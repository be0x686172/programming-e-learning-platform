const checkEmailRegex = (email) => {
	let regex;

	regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return (regex.test(email));
};

export { checkEmailRegex };

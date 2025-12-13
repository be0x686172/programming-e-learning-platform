const checkPasswordRegex = (password = "") => {
	let rules;

	rules = {
		lowercase: /[a-z]/,
		uppercase: /[A-Z]/,
		number: /\d/,
		specialCharacter: /[!@#$%^&*()]/,
		minLength: /.{8,}/
	};
	return {
		lowercase: rules.lowercase.test(password),
		uppercase: rules.uppercase.test(password),
		number: rules.number.test(password),
		specialCharacter: rules.specialCharacter.test(password),
		minLength: rules.minLength.test(password)
	}
}

export { checkPasswordRegex };

/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const form = {
	formId: "new-client-form",
	formField: {
		firstName: {
			name: "firstName",
			label: "Введите ФИО или ИНН",
			type: "text",
			errorMsg: "ФИО или ИНН обязательны для заполнения.",
		},
		lastName: {
			name: "lastName",
			label: "Last Name",
			type: "text",
			errorMsg: "Last name is required.",
		},
		company: {
			name: "company",
			label: "ИНН",
			type: "text",
			errorMsg: "ИНН обязателен для заполнения.",
		},
		email: {
			name: "email",
			label: "Email",
			type: "email",
			errorMsg: "Email обязателен для заполнения.",
			// invalidMsg: "Your email address is invalid",
			invalidMsg: "Ваш адрес электронной почты недействительный.",
		},
		referal: {
			name: "referal",
			label: "Реферал",
			type: "text",
			errorMsg: "Реферал обязателен для заполнения.",
		},
		password: {
			name: "password",
			label: "Password",
			type: "password",
			errorMsg: "Password is required.",
			invalidMsg: "Your password should be more than 6 characters.",
		},
		repeatPassword: {
			name: "repeatPassword",
			label: "Repeat Password",
			type: "password",
			errorMsg: "Password is required.",
			invalidMsg: "Your password doesn't match.",
		},
		address1: {
			name: "address1",
			label: "Улица, номер дома, индекс",
			type: "text",
			errorMsg: "Адрес обязателен для заполнения",
		},
		address2: {
			name: "address2",
			label: "Address 2",
			type: "text",
		},
		city: {
			name: "city",
			label: "City",
			type: "text",
			errorMsg: "City is required.",
		},
		zip: {
			name: "zip",
			label: "Zip",
			type: "number",
			errorMsg: "Zip is required.",
			invalidMsg: "Zipcode is not valie (e.g. 70000).",
		},
		twitter: {
			name: "twitter",
			label: "Twitter Handle",
			type: "text",
			errorMsg: "Twitter profile is required.",
		},
		facebook: {
			name: "facebook",
			label: "Facebook Account",
			type: "text",
		},
		instagram: {
			name: "instagram",
			label: "Instagram Account",
			type: "text",
		},
		vk: {
			name: "vk",
			label: "ВК",
			type: "text",
		},
		ok: {
			name: "ok",
			label: "Ок",
			type: "text",
		},
		yapy: {
			name: "yapy",
			label: "yapy.ru",
			type: "text",
		},
		publicEmail: {
			name: "publicEmail",
			label: "Public Email",
			type: "email",
		},
		note: {
			name: "note",
			label: "Напишите несколько слов для упрощения поиска",
			placeholder: "",
		},
	},
};

export default form;

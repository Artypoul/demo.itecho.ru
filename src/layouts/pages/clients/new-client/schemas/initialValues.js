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

import checkout from "layouts/pages/clients/new-client/schemas/form";

const {
	formField: {
		firstName,
		lastName,
		company,
		referal,
		email,
		password,
		repeatPassword,
		address1,
		address2,
		city,
		zip,
		twitter,
		facebook,
		instagram,
		vk,
		ok,
		yapy,
		publicEmail,
		note,
	},
} = checkout;

const initialValues = {
	[firstName.name]: "",
	[lastName.name]: "",
	[company.name]: "",
	[referal.name]: "",
	[email.name]: "",
	[password.name]: "",
	[repeatPassword.name]: "",
	[address1.name]: "",
	[address2.name]: "",
	[city.name]: "",
	[zip.name]: "",
	[twitter.name]: "",
	[facebook.name]: "",
	[instagram.name]: "",
	[vk.name]: "",
	[ok.name]: "",
	[yapy.name]: "",
	[publicEmail.name]: "",
	[note.name]: "",
};

export default initialValues;

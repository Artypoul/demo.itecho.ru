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

// Countries flags
import locationOn from "assets/images/icons/location.svg";

const salesTableData = [
	// {
	// 	Филиал: [US, "united state"],
	// 	sales: 2500,
	// 	value: "$230,900",
	// 	bounce: "29.9%",
	// },
	{
		Филиал: [locationOn, "Новосибирск"],
		Объем_м3: 2500,
		Сумма: "672,91₽",
		Заполнение: "85%",
	},
	{
		Филиал: [locationOn, "Екатеринбург"],
		Объем_м3: "3.900",
		Сумма: "512,68₽",
		Заполнение: "75%",
	},
	{
		Филиал: [locationOn, "Донецк"],
		Объем_м3: "1.400",
		Сумма: "455,42₽",
		Заполнение: "23%",
	},
	{
		Филиал: [locationOn, "Москва"],
		Объем_м3: 562,
		Сумма: "286,98₽",
		Заполнение: "85%",
	},
];

export default salesTableData;

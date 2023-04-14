/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* company Page: https://www.creative-tim.com/company/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/* eslint-disable react/prop-types */
// OrderList-default page components
import IdCell from "layouts/ecommerce/orders-default/order-list/components/IdCell";
import DefaultCell from "layouts/ecommerce/orders-default/order-list/components/DefaultCell";
import StatusCell from "layouts/ecommerce/orders-default/order-list/components/StatusCell";
import CustomerCell from "layouts/ecommerce/orders-default/order-list/components/CustomerCell";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";
import ivana from "assets/images/ivana-squares.jpg";

const dataTableData = {
	columns: [
		{
			Header: "Название",
			accessor: "name",
			Cell: ({ value }) => <IdCell id={value} />,
		},
		{
			Header: "Дата",
			accessor: "date",
			Cell: ({ value }) => <DefaultCell value={value} />,
		},
		{
			Header: "Статус",
			accessor: "status",
			Cell: ({ value }) => {
				let status;

				if (value === "Выполнен") {
					status = (
						<StatusCell icon="done" color="success" status="В сети" />
					);
				} else {
					status = (
						<StatusCell icon="close" color="error" status="Не в сети" />
					);
				}

				return status;
			},
		},
		{
			Header: "Контакт",
			accessor: "contact",
			Cell: ({ value: [name, data] }) => (
				<CustomerCell
					image={data.image}
					color={data.color || "dark"}
					name={name}
				/>
			),
		},
		{
			Header: "ИНН",
			accessor: "company",
			Cell: ({ value }) => <DefaultCell value={value} />,
		},
		{
			Header: "Менеджер",
			accessor: "manager",
			Cell: ({ value: [name, data] }) => (
				<CustomerCell
					image={data.image}
					color={data.color || "dark"}
					name={name}
				/>
			),
		},
	],

	rows: [
		{
			name: "ООО “Город Наград”",
			date: "1 Ноя, 10:20",
			status: "Выполнен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "540454102",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “АБВ”",
			date: "1 Ноя, 10:20",
			status: "Выполнен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "741424102",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “Удача”",
			date: "1 Ноя, 10:20",
			status: "Возвращен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "231444102",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “Центр решений”",
			date: "1 Ноя, 10:20",
			status: "Выполнен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "231444102",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “Новая компания”",
			date: "1 Ноя, 10:20",
			status: "Отменен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "239444102",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “Город Наград”",
			date: "1 Ноя, 10:20",
			status: "Бронь",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "233544102",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “Надежные решения”",
			date: "1 Ноя, 10:20",
			status: "Выполнен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "525454142",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “Мощные машины”",
			date: "1 Ноя, 10:20",
			status: "Выполнен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "185423142",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “ТехПром”",
			date: "1 Ноя, 10:20",
			status: "Возвращен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "946444152",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “Технологии”",
			date: "1 Ноя, 10:20",
			status: "Выполнен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "345424112",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “Промышленные системы”",
			date: "1 Ноя, 10:20",
			status: "Бронь",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "241424142",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “Город Наград”",
			date: "1 Ноя, 10:20",
			status: "Выполнен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "540454102",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “АБВ”",
			date: "1 Ноя, 10:20",
			status: "Выполнен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "741424102",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “Удача”",
			date: "1 Ноя, 10:20",
			status: "Возвращен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "231444102",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “Центр решений”",
			date: "1 Ноя, 10:20",
			status: "Выполнен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "231444102",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “Новая компания”",
			date: "1 Ноя, 10:20",
			status: "Отменен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "239444102",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “Город Наград”",
			date: "1 Ноя, 10:20",
			status: "Бронь",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "233544102",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “Надежные решения”",
			date: "1 Ноя, 10:20",
			status: "Выполнен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "525454142",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “Мощные машины”",
			date: "1 Ноя, 10:20",
			status: "Выполнен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "185423142",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “ТехПром”",
			date: "1 Ноя, 10:20",
			status: "Возвращен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "946444152",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “Технологии”",
			date: "1 Ноя, 10:20",
			status: "Выполнен",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "345424112",
			manager: ["Мария Петрова", { image: team3 }],
		},
		{
			name: "ООО “Промышленные системы”",
			date: "1 Ноя, 10:20",
			status: "Бронь",
			contact: ["Вадим Пушилин", { image: team2 }],
			company: "241424142",
			manager: ["Мария Петрова", { image: team3 }],
		},
	],
};

export default dataTableData;

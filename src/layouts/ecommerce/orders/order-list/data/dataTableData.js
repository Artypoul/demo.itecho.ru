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

/* eslint-disable react/prop-types */

// ProductsList page components
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
			Header: "id",
			accessor: "id",
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
						<StatusCell icon="done" color="success" status="Выполнен" />
					);
				} else if (value === "Бронь") {
					status = (
						<StatusCell icon="lock" color="success" status="Бронь" />
					);
				} else if (value === "Возвращен") {
					status = (
						<StatusCell icon="replay" color="dark" status="Возвращен" />
					);
				} else {
					status = (
						<StatusCell icon="close" color="error" status="Отменен" />
					);
				}

				return status;
			},
		},
		{
			Header: "Исполнитель",
			accessor: "customer",
			Cell: ({ value: [name, data] }) => (
				<CustomerCell
					image={data.image}
					color={data.color || "dark"}
					name={name}
				/>
			),
		},
		{
			Header: "Продукт",
			accessor: "product",
			Cell: ({ value }) => {
				const [name, data] = value;

				return (
					<DefaultCell
						value={typeof value === "string" ? value : name}
						suffix={data.suffix || false}
					/>
				);
			},
		},
		{
			Header: "Сумма",
			accessor: "revenue",
			Cell: ({ value }) => <DefaultCell value={value} />,
		},
	],

	rows: [
		{
			id: "#10421",
			date: "1 Ноя, 10:20",
			status: "Выполнен",
			customer: ["Вадим Пушилин", { image: team2 }],
			product: "Контейнер",
			revenue: "56 000₽",
		},
		{
			id: "#10422",
			date: "1 Ноя, 10:47",
			status: "Бронь",
			customer: ["Алиса Полищук", { image: team1 }],
			product: "Контейнер",
			revenue: "38 400₽",
		},
		{
			id: "#10423",
			date: "1 Ноя, 15:30",
			status: "Возвращен",
			customer: ["Анастасия Волочкова", { image: "A" }],
			product: "Авто",
			revenue: "421 000₽",
		},
		{
			id: "#10424",
			date: "2 Ноя, 15:30",
			status: "Выполнен",
			customer: ["Николай Гаськов", { image: team4 }],
			product: "Контейнер",
			revenue: "124 360₽",
		},
		{
			id: "#10425",
			date: "2 Ноя, 16:30",
			status: "Отменен",
			customer: ["Евгения Новикова", { image: team3 }],
			product: "Авто",
			revenue: "76 220₽",
		},
		{
			id: "#10426",
			date: "2 Ноя, 16:30",
			status: "Выполнен",
			customer: ["Василий Куприн", { image: "В" }],
			product: "Авто",
			revenue: "39 460₽",
		},
		{
			id: "#10427",
			date: "2 Ноя, 17:10",
			status: "Бронь",
			customer: ["Елизавета Петрова", { image: "E" }],
			product: "Контейнер",
			revenue: "33 300₽",
		},
		{
			id: "#10428",
			date: "3 Ноя, 14:30",
			status: "Выполнен",
			customer: ["Александр Кузнецов", { image: "A" }],
			product: "Контейнер",
			revenue: "192 400₽",
		},
		{
			id: "#10429",
			date: "4 Ноя, 11:19",
			status: "Бронь",
			customer: ["Андрей Морозов", { image: "A", color: "success" }],
			product: "Авто",
			revenue: "38 400₽",
		},
		{
			id: "#10430",
			date: "4 Ноя, 13:19",
			status: "Возвращен",
			customer: ["Ирина Васькова", { image: ivana }],
			product: "Контейнер",
			revenue: "82 900₽",
		},
		{
			id: "#10431",
			date: "2 Ноя, 15:55",
			status: "Бронь",
			customer: ["Мария Дроздова", { image: "М" }],
			product: "Контейнер",
			revenue: "98 210₽",
		},
		{
			id: "#10432",
			date: "5 Ноя, 19:10",
			status: "Выполнен",
			customer: ["Иван Бунин", { image: "И", color: "info" }],
			product: "Авто",
			revenue: "199 400₽",
		},
	],
};

export default dataTableData;

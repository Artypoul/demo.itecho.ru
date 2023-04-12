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

// Sales dashboard components
import ProductCell from "layouts/dashboards/sales/components/ProductCell";
import RefundsCell from "layouts/dashboards/sales/components/RefundsCell";
import DefaultCell from "layouts/dashboards/sales/components/DefaultCell";

// Images
import customer from "assets/images/icons/сustomer.svg";

const dataTableData = {
	columns: [
		{ Header: "Название", accessor: "name", width: "55%" },
		{ Header: "Сумма", accessor: "sum" },
		{ Header: "Прибыль", accessor: "profit", align: "center" },
		{ Header: "Вернулся", accessor: "returned", align: "center" },
	],

	rows: [
		{
			name: (
				<ProductCell
					image={customer}
					name="ООО “Прогресс-НСК"
					orders={830}
				/>
			),
			sum: <DefaultCell>130 992 ₽</DefaultCell>,
			profit: <DefaultCell>55 600 ₽</DefaultCell>,
			returned: (
				<RefundsCell
					value={13}
					icon={{ color: "success", name: "keyboard_arrow_up" }}
				/>
			),
		},
		{
			name: (
				<ProductCell
					image={customer}
					name="ООО “ТРАНССТРОЙ”"
					orders={128}
				/>
			),
			sum: <DefaultCell>110 142 ₽</DefaultCell>,
			profit: <DefaultCell>46 564 ₽</DefaultCell>,
			returned: (
				<RefundsCell
					value={40}
					icon={{ color: "error", name: "keyboard_arrow_down" }}
				/>
			),
		},
		{
			name: (
				<ProductCell
					image={customer}
					name="ООО “Новая компания”"
					orders={242}
				/>
			),
			sum: <DefaultCell>342 724 ₽</DefaultCell>,
			profit: <DefaultCell>180 454 ₽</DefaultCell>,
			returned: (
				<RefundsCell
					value={54}
					icon={{ color: "success", name: "keyboard_arrow_up" }}
				/>
			),
		},
		{
			name: (
				<ProductCell
					image={customer}
					name="ООО ”Солнечный день”"
					orders={521}
				/>
			),
			sum: <DefaultCell>450 724 ₽</DefaultCell>,
			profit: <DefaultCell>178 454 ₽</DefaultCell>,
			returned: (
				<RefundsCell
					value={5}
					icon={{ color: "error", name: "keyboard_arrow_down" }}
				/>
			),
		},
		{
			name: (
				<ProductCell image={customer} name="ООО ”Как дела”" orders={121} />
			),
			sum: <DefaultCell>89 344 ₽</DefaultCell>,
			profit: <DefaultCell>10 112 ₽</DefaultCell>,
			returned: (
				<RefundsCell
					value={121}
					icon={{ color: "success", name: "keyboard_arrow_up" }}
				/>
			),
		},
	],
};

export default dataTableData;

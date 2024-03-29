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

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDBadgeDot from "components/MDBadgeDot";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "layouts/templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "layouts/templates/Navbars/DashboardNavbar";
import Footer from "layouts/templates/Footer";
import DefaultStatisticsCard from "layouts/templates/Cards/StatisticsCards/DefaultStatisticsCard";
import DefaultLineChart from "layouts/templates/Charts/LineCharts/DefaultLineChart";
import HorizontalBarChart from "layouts/templates/Charts/BarCharts/HorizontalBarChart";
import SalesTable from "layouts/templates/Tables/SalesTable";
import DataTable from "layouts/templates/Tables/DataTable";

// Sales dashboard components
import ChannelsChart from "layouts/dashboards/sales/components/ChannelsChart";

// Data
import defaultLineChartData from "layouts/dashboards/sales/data/defaultLineChartData";
import horizontalBarChartData from "layouts/dashboards/sales/data/horizontalBarChartData";
import salesTableData from "layouts/dashboards/sales/data/salesTableData";
import dataTableData from "layouts/dashboards/sales/data/dataTableData";

function Sales() {
	// DefaultStatisticsCard state for the dropdown value
	const [salesDropdownValue, setSalesDropdownValue] =
		useState("6 Мая - 7 Мая");
	const [customersDropdownValue, setCustomersDropdownValue] =
		useState("6 Мая - 7 Мая");
	const [revenueDropdownValue, setRevenueDropdownValue] =
		useState("6 Мая - 7 Мая");

	// DefaultStatisticsCard state for the dropdown action
	const [salesDropdown, setSalesDropdown] = useState(null);
	const [customersDropdown, setCustomersDropdown] = useState(null);
	const [revenueDropdown, setRevenueDropdown] = useState(null);

	// DefaultStatisticsCard handler for the dropdown action
	const openSalesDropdown = ({ currentTarget }) =>
		setSalesDropdown(currentTarget);
	const closeSalesDropdown = ({ currentTarget }) => {
		setSalesDropdown(null);
		setSalesDropdownValue(currentTarget.innerText || salesDropdownValue);
	};
	const openCustomersDropdown = ({ currentTarget }) =>
		setCustomersDropdown(currentTarget);
	const closeCustomersDropdown = ({ currentTarget }) => {
		setCustomersDropdown(null);
		setCustomersDropdownValue(currentTarget.innerText || salesDropdownValue);
	};
	const openRevenueDropdown = ({ currentTarget }) =>
		setRevenueDropdown(currentTarget);
	const closeRevenueDropdown = ({ currentTarget }) => {
		setRevenueDropdown(null);
		setRevenueDropdownValue(currentTarget.innerText || salesDropdownValue);
	};

	// Dropdown menu template for the DefaultStatisticsCard
	const renderMenu = (state, close) => (
		<Menu
			anchorEl={state}
			transformOrigin={{ vertical: "top", horizontal: "center" }}
			open={Boolean(state)}
			onClose={close}
			keepMounted
			disableAutoFocusItem
		>
			<MenuItem onClick={close}>За 5 дней</MenuItem>
			<MenuItem onClick={close}>За неделю</MenuItem>
			<MenuItem onClick={close}>За 30 дней</MenuItem>
		</Menu>
	);

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox py={3}>
				<MDBox mb={3}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={4}>
							<DefaultStatisticsCard
								title="Продажи"
								count="201 232,00₽"
								percentage={{
									color: "success",
									value: "+55%",
									label: "с прошлого месяца",
								}}
								dropdown={{
									action: openSalesDropdown,
									menu: renderMenu(salesDropdown, closeSalesDropdown),
									value: salesDropdownValue,
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<DefaultStatisticsCard
								title="Клиенты"
								count="3 200"
								percentage={{
									color: "success",
									value: "+12%",
									label: "с прошлого месяца",
								}}
								dropdown={{
									action: openCustomersDropdown,
									menu: renderMenu(
										customersDropdown,
										closeCustomersDropdown
									),
									value: customersDropdownValue,
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<DefaultStatisticsCard
								title="Средний чек"
								count="16 000₽"
								percentage={{
									color: "success",
									value: "+12%",
									label: "с прошлого месяца",
								}}
								dropdown={{
									action: openRevenueDropdown,
									menu: renderMenu(
										revenueDropdown,
										closeRevenueDropdown
									),
									value: revenueDropdownValue,
								}}
							/>
						</Grid>
					</Grid>
				</MDBox>
				<MDBox mb={3}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6} lg={4}>
							<ChannelsChart />
						</Grid>
						<Grid item xs={12} sm={6} lg={8}>
							<DefaultLineChart
								title="Доход"
								description={
									<MDBox display="flex" justifyContent="space-between">
										<MDBox display="flex" ml={-1}>
											<MDBadgeDot
												color="primary"
												size="sm"
												badgeContent="Яндекс"
											/>
											<MDBadgeDot
												color="dark"
												size="sm"
												badgeContent="Google Ads"
											/>
										</MDBox>
										<MDBox
											mt={-4}
											mr={-1}
											position="absolute"
											right="1.5rem"
										>
											<Tooltip
												title="Посмотреть, какие рекламные объявления работают лучше"
												placement="left"
												arrow
											>
												<MDButton
													variant="outlined"
													color="secondary"
													size="small"
													circular
													iconOnly
												>
													<Icon>priority_high</Icon>
												</MDButton>
											</Tooltip>
										</MDBox>
									</MDBox>
								}
								chart={defaultLineChartData}
							/>
						</Grid>
					</Grid>
				</MDBox>
				<MDBox mb={3}>
					<Grid container spacing={3}>
						<Grid item xs={12} lg={8}>
							<HorizontalBarChart
								title="Продажи по годам"
								chart={horizontalBarChartData}
							/>
						</Grid>
						<Grid item xs={12} lg={4}>
							<SalesTable
								title="Продажи по регионам"
								rows={salesTableData}
							/>
						</Grid>
					</Grid>
				</MDBox>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Card>
							<MDBox pt={3} px={3}>
								<MDTypography variant="h6" fontWeight="medium">
									Топ заказчиков
								</MDTypography>
							</MDBox>
							<MDBox py={1}>
								<DataTable
									table={dataTableData}
									entriesPerPage={false}
									showTotalEntries={false}
									isSorted={false}
									noEndBorder
								/>
							</MDBox>
						</Card>
					</Grid>
				</Grid>
			</MDBox>
			<Footer />
		</DashboardLayout>
	);
}

export default Sales;

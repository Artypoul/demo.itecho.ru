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

// @mui material components
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "layouts/templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "layouts/templates/Navbars/DashboardNavbar";
import Footer from "layouts/templates/Footer";
import ReportsBarChart from "layouts/templates/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "layouts/templates/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "layouts/templates/Cards/StatisticsCards/ComplexStatisticsCard";
import BookingCard from "layouts/templates/Cards/BookingCard";

// Anaytics dashboard components
import SalesByCountry from "layouts/dashboards/analytics/components/SalesByCountry";

// Data
import reportsBarChartData from "layouts/dashboards/analytics/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboards/analytics/data/reportsLineChartData";

// Images
import camcorderWarehouse from "assets/images/camcorder-warehouse.png";
import camcorderOffice from "assets/images/camcorder-office.png";
import camcorderAccounting from "assets/images/camcorder-accounting.png";

function Analytics() {
	const { sales, tasks } = reportsLineChartData;

	// Action buttons for the BookingCard
	const actionButtons = (
		<>
			<Tooltip title="Refresh" placement="bottom">
				<MDTypography
					variant="body1"
					color="primary"
					lineHeight={1}
					sx={{ cursor: "pointer", mx: 3 }}
				>
					<Icon color="inherit">refresh</Icon>
				</MDTypography>
			</Tooltip>
			<Tooltip title="Edit" placement="bottom">
				<MDTypography
					variant="body1"
					color="info"
					lineHeight={1}
					sx={{ cursor: "pointer", mx: 3 }}
				>
					<Icon color="inherit">edit</Icon>
				</MDTypography>
			</Tooltip>
		</>
	);

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox py={3}>
				<Grid container>
					<SalesByCountry />
				</Grid>
				<MDBox mt={6}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6} lg={4}>
							<MDBox mb={3}>
								<ReportsBarChart
									color="primary"
									title="Продажи по дням"
									description="Предыдущая неделя"
									date="обновлено 1мин назад"
									chart={reportsBarChartData}
								/>
							</MDBox>
						</Grid>
						<Grid item xs={12} md={6} lg={4}>
							<MDBox mb={3}>
								<ReportsLineChart
									color="success"
									title="Продажи"
									description={
										<>
											(<strong>+15%</strong>) Прирост
										</>
									}
									date="обновлено 1мин назад"
									chart={sales}
								/>
							</MDBox>
						</Grid>
						<Grid item xs={12} md={6} lg={4}>
							<MDBox mb={3}>
								<ReportsLineChart
									color="dark"
									title="Дебиторская задолженность"
									description="По месяцам"
									date="обновлено 1 мин назад"
									chart={tasks}
								/>
							</MDBox>
						</Grid>
					</Grid>
				</MDBox>
				<MDBox mt={1.5}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6} lg={3}>
							<MDBox mb={1.5}>
								<ComplexStatisticsCard
									color="dark"
									icon="account_circle"
									title="Персонал"
									count={281}
									percentage={{
										color: "success",
										amount: "+5%",
										label: "На этой неделе",
									}}
								/>
							</MDBox>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<MDBox mb={1.5}>
								<ComplexStatisticsCard
									icon="leaderboard"
									title="Пользователи"
									count="2,300"
									color="primary"
									percentage={{
										color: "success",
										amount: "+3%",
										label: "На прошлой неделе",
									}}
								/>
							</MDBox>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<MDBox mb={1.5}>
								<ComplexStatisticsCard
									color="success"
									icon="store"
									title="Выручка"
									count="34k"
									percentage={{
										color: "success",
										amount: "+1%",
										label: "к вчерашнему",
									}}
								/>
							</MDBox>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<MDBox mb={1.5}>
								<ComplexStatisticsCard
									color="info"
									icon="person_add"
									title="Агенты"
									count="+91"
									percentage={{
										color: "success",
										amount: "",
										label: "Обновлено сейчас",
									}}
								/>
							</MDBox>
						</Grid>
					</Grid>
				</MDBox>
				<MDBox mt={2}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6} lg={4}>
							<MDBox mt={3}>
								<BookingCard
									image={camcorderWarehouse}
									title="Видеокамера склад"
									description="Что бы посмотреть запись нажмите на карточку"
									// price="$899/night"
									// location="Barcelona, Spain"
									action={actionButtons}
								/>
							</MDBox>
						</Grid>
						<Grid item xs={12} md={6} lg={4}>
							<MDBox mt={3}>
								<BookingCard
									image={camcorderOffice}
									title="Видеокамера офис"
									description="Что бы посмотреть запись нажмите на карточку"
									// price="$1.119/night"
									// location="London, UK"
									action={actionButtons}
								/>
							</MDBox>
						</Grid>
						<Grid item xs={12} md={6} lg={4}>
							<MDBox mt={3}>
								<BookingCard
									image={camcorderAccounting}
									title="Видеокамера бухгалтерия"
									description="Что бы посмотреть запись нажмите на карточку"
									// price="$459/night"
									// location="Milan, Italy"
									action={actionButtons}
								/>
							</MDBox>
						</Grid>
					</Grid>
				</MDBox>
			</MDBox>
			<Footer />
		</DashboardLayout>
	);
}

export default Analytics;

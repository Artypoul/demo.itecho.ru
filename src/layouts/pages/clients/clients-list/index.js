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
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "layouts/templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "layouts/templates/Navbars/DashboardNavbar";
import Footer from "layouts/templates/Footer";

// Data
import DataTable from "layouts/templates/Tables/DataTable";
import dataTableData from "layouts/pages/clients/clients-list/data/dataTableData";

function ClientsList() {
	const [menu, setMenu] = useState(null);

	const openMenu = event => setMenu(event.currentTarget);
	const closeMenu = () => setMenu(null);

	const renderMenu = (
		<Menu
			anchorEl={menu}
			anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
			transformOrigin={{ vertical: "top", horizontal: "left" }}
			open={Boolean(menu)}
			onClose={closeMenu}
			keepMounted
		>
			<MenuItem onClick={closeMenu}>Статус: В сети</MenuItem>
			<MenuItem onClick={closeMenu}>Статус: Не в сети</MenuItem>
			<Divider sx={{ margin: "0.5rem 0" }} />
			<MenuItem onClick={closeMenu}>
				<MDTypography variant="button" color="error" fontWeight="regular">
					Удалить Фильтр
				</MDTypography>
			</MenuItem>
		</Menu>
	);

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox my={3}>
				<MDBox
					display="flex"
					justifyContent="space-between"
					alignItems="flex-start"
					mb={2}
				>
					<MDButton
						variant="gradient"
						color="info"
						component={Link}
						to="/application/clients/new-client"
					>
						Новый клиент
					</MDButton>
					<MDBox display="flex">
						<MDButton
							variant={menu ? "contained" : "outlined"}
							color="dark"
							onClick={openMenu}
						>
							Фильтры&nbsp;
							<Icon>keyboard_arrow_down</Icon>
						</MDButton>
						{renderMenu}
						<MDBox ml={1}>
							<MDButton variant="outlined" color="dark">
								<Icon>description</Icon>
								&nbsp;Экспорт csv
							</MDButton>
						</MDBox>
					</MDBox>
				</MDBox>
				<Card>
					<MDBox p={3} lineHeight={1}>
						<MDTypography variant="h5" fontWeight="medium">
							Клиенты
						</MDTypography>
						<MDTypography variant="button" color="text">
							Клиентская база
						</MDTypography>
					</MDBox>
					<DataTable table={dataTableData} canSearch />
				</Card>
			</MDBox>
			<Footer />
		</DashboardLayout>
	);
}

export default ClientsList;

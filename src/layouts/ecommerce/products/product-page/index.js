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

// @react-jvectormap components
import { VectorMap } from "@react-jvectormap/core";
import { ruMerc } from "@react-jvectormap/russia";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "layouts/templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "layouts/templates/Navbars/DashboardNavbar";
import Footer from "layouts/templates/Footer";
import DataTable from "layouts/templates/Tables/DataTable";

// ProductPage page components
import ProductImages from "layouts/ecommerce/products/product-page/components/ProductImages";
import ProductInfo from "layouts/ecommerce/products/product-page/components/ProductInfo";

// Data
import dataTableData from "layouts/ecommerce/products/product-page/data/dataTableData";

function ProductPage() {
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox py={3}>
				<Card sx={{ overflow: "visible" }}>
					<MDBox p={3}>
						<MDBox mb={3}>
							<MDTypography variant="h5" fontWeight="medium">
								Заказ №1531351
							</MDTypography>
						</MDBox>

						<Grid container spacing={3}>
							<Grid item xs={12} lg={6} xl={5}>
								<ProductImages />
							</Grid>
							<Grid item xs={12} lg={5} sx={{ mx: "auto" }}>
								<ProductInfo />
							</Grid>
						</Grid>

						{/* <MDBox mt={8} mb={2}>
							<MDBox mb={1} ml={2}>
								<MDTypography variant="h5" fontWeight="medium">
									Other Products
								</MDTypography>
							</MDBox>
							<DataTable
								table={dataTableData}
								entriesPerPage={false}
								showTotalEntries={false}
								isSorted={false}
							/>
						</MDBox> */}

						<MDBox sx={{ m: 4, mt: 8, mb: 2, height: 400 }}>
							<VectorMap
								map={ruMerc}
								zoomOnScroll={false}
								zoomButtons={true}
								markersSelectable
								backgroundColor="transparent"
								selectedMarkers={[1]}
								markers={[
									{
										name: "Новосибирск 1д. 12ч. 35м.",
										latLng: [55.0425, 82.9165],
									},
									{
										name: "Екатеринбург 1д. 4ч. 35м.",
										latLng: [56.8359, 60.6146],
									},
									{
										name: "Донецк 6д. 8ч.",
										latLng: [48.0136, 37.8066],
									},
									{
										name: "Москва 2д. 20ч.",
										latLng: [55.7445, 37.6208],
									},
								]}
								regionStyle={{
									initial: {
										fill: "#dee2e7",
										"fill-opacity": 1,
										stroke: "none",
										"stroke-width": 0,
										"stroke-opacity": 0,
									},
								}}
								markerStyle={{
									initial: {
										fill: "#e91e63",
										stroke: "#ffffff",
										"stroke-width": 5,
										"stroke-opacity": 0.5,
										r: 7,
									},
									hover: {
										fill: "E91E63",
										stroke: "#ffffff",
										"stroke-width": 5,
										"stroke-opacity": 0.5,
									},
									selected: {
										fill: "E91E63",
										stroke: "#ffffff",
										"stroke-width": 5,
										"stroke-opacity": 0.5,
									},
								}}
								onRegionTipShow={() => true}
								onMarkerTipShow={() => true}
							/>
						</MDBox>
					</MDBox>
				</Card>
			</MDBox>
			<Footer />
		</DashboardLayout>
	);
}

export default ProductPage;

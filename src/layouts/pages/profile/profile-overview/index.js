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
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ProfilesList from "examples/Lists/ProfilesList";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Overview page components
import Header from "layouts/pages/profile/components/Header";
import PlatformSettings from "layouts/pages/profile/profile-overview/components/PlatformSettings";

// Data
import profilesListData from "layouts/pages/profile/profile-overview/data/profilesListData";

// Images
import order from "assets/images/order.png";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Overview() {
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox mb={2} />
			<Header>
				<MDBox mt={5} mb={3}>
					<Grid container spacing={1}>
						<Grid item xs={12} md={6} xl={4}>
							<PlatformSettings />
						</Grid>
						<Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
							<Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
							<ProfileInfoCard
								title="Информация"
								description="Привет я продажник"
								info={{
									ФИО: "Иванова Мария Алексеевна",
									Тел: "+7 (914) 1234 123",
									email: "alecthompson@mail.ru",
									location: "Красноярск",
								}}
								social={[
									{
										link: "https://www.facebook.com/CreativeTim/",
										icon: <FacebookIcon />,
										color: "facebook",
									},
									{
										link: "https://twitter.com/creativetim",
										icon: <TwitterIcon />,
										color: "twitter",
									},
									{
										link: "https://www.instagram.com/creativetimofficial/",
										icon: <InstagramIcon />,
										color: "instagram",
									},
								]}
								action={{ route: "", tooltip: "Edit Profile" }}
								shadow={false}
							/>
							<Divider orientation="vertical" sx={{ mx: 0 }} />
						</Grid>
						<Grid item xs={12} xl={4}>
							<ProfilesList
								title="conversations"
								profiles={profilesListData}
								shadow={false}
							/>
						</Grid>
					</Grid>
				</MDBox>
				<MDBox pt={2} px={2} lineHeight={1.25}>
					<MDTypography variant="h6" fontWeight="medium">
						Заявки
					</MDTypography>
					<MDBox mb={1}>
						<MDTypography variant="button" color="text">
							Горящие заявки
						</MDTypography>
					</MDBox>
				</MDBox>
				<MDBox p={2}>
					<Grid container spacing={6}>
						<Grid item xs={12} md={6} xl={3}>
							<DefaultProjectCard
								image={order}
								label="32123"
								title="Заказ"
								description="Чтобы посмотреть детали заказа кликните мышкой"
								action={{
									type: "internal",
									route: "/pages/profile/profile-overview",
									color: "info",
									label: "Просмотр",
								}}
								authors={[
									{ image: team1, name: "Elena Morison" },
									{ image: team2, name: "Ryan Milly" },
									{ image: team3, name: "Nick Daniel" },
									{ image: team4, name: "Peterson" },
								]}
							/>
						</Grid>
						<Grid item xs={12} md={6} xl={3}>
							<DefaultProjectCard
								image={order}
								label="32123"
								title="Заказ"
								description="Чтобы посмотреть детали заказа кликните мышкой"
								action={{
									type: "internal",
									route: "/pages/profile/profile-overview",
									color: "info",
									label: "Просмотр",
								}}
								authors={[
									{ image: team3, name: "Nick Daniel" },
									{ image: team4, name: "Peterson" },
									{ image: team1, name: "Elena Morison" },
									{ image: team2, name: "Ryan Milly" },
								]}
							/>
						</Grid>
						<Grid item xs={12} md={6} xl={3}>
							<DefaultProjectCard
								image={order}
								label="32123"
								title="Заказ"
								description="Чтобы посмотреть детали заказа кликните мышкой"
								action={{
									type: "internal",
									route: "/pages/profile/profile-overview",
									color: "info",
									label: "Просмотр",
								}}
								authors={[
									{ image: team4, name: "Peterson" },
									{ image: team3, name: "Nick Daniel" },
									{ image: team2, name: "Ryan Milly" },
									{ image: team1, name: "Elena Morison" },
								]}
							/>
						</Grid>
						<Grid item xs={12} md={6} xl={3}>
							<DefaultProjectCard
								image={order}
								label="32123"
								title="Заказ"
								description="Чтобы посмотреть детали заказа кликните мышкой"
								action={{
									type: "internal",
									route: "/pages/profile/profile-overview",
									color: "info",
									label: "Просмотр",
								}}
								authors={[
									{ image: team4, name: "Peterson" },
									{ image: team3, name: "Nick Daniel" },
									{ image: team2, name: "Ryan Milly" },
									{ image: team1, name: "Elena Morison" },
								]}
							/>
						</Grid>
					</Grid>
				</MDBox>
			</Header>
			<Footer />
		</DashboardLayout>
	);
}

export default Overview;

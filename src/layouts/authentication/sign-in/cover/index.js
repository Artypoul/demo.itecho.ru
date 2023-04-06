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

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-in-cover.jpeg";

function Cover() {
	const navigate = useNavigate();
	const [rememberMe, setRememberMe] = useState(true);
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	const handleSetRememberMe = () => setRememberMe(!rememberMe);
	const handleGoToAnalytics = () => {
		if (login && password) navigate("/dashboards/analytics");
	};
	const handleLoginChange = event => setLogin(event.target.value);
	const handlePasswordChange = event => setPassword(event.target.value);

	return (
		<CoverLayout image={bgImage}>
			<Card>
				<MDBox
					variant="gradient"
					bgColor="success"
					borderRadius="lg"
					coloredShadow="success"
					mx={2}
					mt={-3}
					p={3}
					mb={1}
					textAlign="center"
				>
					<MDTypography
						variant="h4"
						fontWeight="medium"
						color="white"
						mt={1}
					>
						ВХОД
					</MDTypography>
					<MDTypography
						display="block"
						variant="button"
						color="white"
						my={1}
					>
						Введите логин и пароль указанный в поле
					</MDTypography>
				</MDBox>
				<MDBox pt={4} pb={3} px={3}>
					<MDBox component="form" role="form">
						<MDBox mb={2}>
							<MDInput
								type="email"
								label="Email"
								variant="standard"
								value={login}
								onChange={handleLoginChange}
								fullWidth
								// placeholder="john@example.com"
								InputLabelProps={{ shrink: true }}
							/>
						</MDBox>
						<MDBox mb={2}>
							<MDInput
								type="password"
								label="Password"
								variant="standard"
								value={password}
								onChange={handlePasswordChange}
								fullWidth
								// placeholder="************"
								InputLabelProps={{ shrink: true }}
							/>
						</MDBox>
						<MDBox display="flex" alignItems="center" ml={0} gap={1}>
							<Switch
								checked={rememberMe}
								onChange={handleSetRememberMe}
							/>
							<MDTypography
								variant="button"
								fontWeight="regular"
								color="text"
								onClick={handleSetRememberMe}
								sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
							>
								Запомнить меня
							</MDTypography>
						</MDBox>
						<MDBox mt={4} mb={1}>
							<MDButton
								variant="gradient"
								color="secondary"
								onClick={handleGoToAnalytics}
								fullWidth
							>
								ГОТОВО
							</MDButton>
						</MDBox>
						<MDBox mt={3} mb={1} textAlign="center">
							<MDTypography variant="button" color="text">
								Не зарегистрированы?{" "}
								<MDTypography
									component={Link}
									to="/authentication/sign-up"
									variant="button"
									color="primary"
									fontWeight="medium"
									textGradient
								>
									Регистрация
								</MDTypography>
							</MDTypography>
						</MDBox>
					</MDBox>
				</MDBox>
			</Card>
		</CoverLayout>
	);
}

export default Cover;

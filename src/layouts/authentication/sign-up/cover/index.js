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
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleGoToAnalytics = () => {
		if (name && email && password) navigate("/application/analytics");
	};

	const handleNameChange = event => setName(event.target.value);
	const handleEmailChange = event => setEmail(event.target.value);
	const handlePasswordChange = event => setPassword(event.target.value);

	return (
		<CoverLayout image={bgImage}>
			<Card>
				<MDBox
					variant="gradient"
					bgColor="info"
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
						РЕГИСТРАЦИЯ
					</MDTypography>
					<MDTypography
						display="block"
						variant="button"
						color="white"
						my={1}
					>
						Введите ваш адрес электронной почты и пароль для регистрации
					</MDTypography>
				</MDBox>
				<MDBox pt={4} pb={3} px={3}>
					<MDBox component="form" role="form">
						<MDBox mb={2}>
							<MDInput
								type="text"
								label="Name"
								variant="standard"
								fullWidth
								value={name}
								onChange={handleNameChange}
								// placeholder="john"
								InputLabelProps={{ shrink: true }}
							/>
						</MDBox>
						<MDBox mb={2}>
							<MDInput
								type="email"
								label="Email"
								variant="standard"
								fullWidth
								value={email}
								onChange={handleEmailChange}
								// placeholder="john@example.com"
								InputLabelProps={{ shrink: true }}
							/>
						</MDBox>
						<MDBox mb={2}>
							<MDInput
								type="password"
								label="Password"
								variant="standard"
								fullWidth
								value={password}
								onChange={handlePasswordChange}
								// placeholder="************"
								InputLabelProps={{ shrink: true }}
							/>
						</MDBox>
						<MDBox display="flex" alignItems="center" ml={-1}>
							<Checkbox />
							<MDTypography
								variant="button"
								fontWeight="regular"
								color="text"
								sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
							>
								&nbsp;&nbsp;Я принимаю&nbsp;
							</MDTypography>
							<MDTypography
								component="a"
								href="#"
								variant="button"
								fontWeight="bold"
								color="info"
								textGradient
							>
								Условия использования
							</MDTypography>
						</MDBox>
						<MDBox mt={4} mb={1}>
							<MDButton
								variant="gradient"
								color="info"
								fullWidth
								onClick={handleGoToAnalytics}
							>
								Зарегистрироваться / ГОТОВО
							</MDButton>
						</MDBox>
						<MDBox mt={3} mb={1} textAlign="center">
							<MDTypography variant="button" color="text">
								Уже есть аккаунт?{" "}
								<MDTypography
									component={Link}
									to="/authentication/sign-in"
									variant="button"
									color="info"
									fontWeight="medium"
									textGradient
								>
									Вход
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

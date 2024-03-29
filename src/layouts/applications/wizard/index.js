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
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "layouts/templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "layouts/templates/Navbars/DashboardNavbar";
import Footer from "layouts/templates/Footer";

// Wizard page components
import About from "layouts/applications/wizard/components/About";
import Account from "layouts/applications/wizard/components/Account";
import Address from "layouts/applications/wizard/components/Address";

function getSteps() {
	return ["КЛИЕНТ", "ГРУЗ", "АДРЕС"];
}

function getStepContent(stepIndex) {
	switch (stepIndex) {
		case 0:
			return <About />;
		case 1:
			return <Account />;
		case 2:
			return <Address />;
		default:
			return null;
	}
}

function Wizard() {
	const [activeStep, setActiveStep] = useState(0);
	const steps = getSteps();
	const isLastStep = activeStep === steps.length - 1;

	const handleNext = () => setActiveStep(activeStep + 1);
	const handleBack = () => setActiveStep(activeStep - 1);

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox pt={3} pb={8}>
				<Grid container justifyContent="center" sx={{ my: 4 }}>
					<Grid item xs={12} lg={8}>
						<MDBox mt={6} mb={8} textAlign="center">
							<MDBox mb={1}>
								<MDTypography variant="h3" fontWeight="bold">
									Приемка груза
								</MDTypography>
							</MDBox>
							<MDTypography
								variant="h5"
								fontWeight="regular"
								color="secondary"
							>
								Заполните информацию о грузе.
							</MDTypography>
						</MDBox>
						<Card>
							<MDBox mt={-3} mx={2}>
								<Stepper activeStep={activeStep} alternativeLabel>
									{steps.map(label => (
										<Step key={label}>
											<StepLabel>{label}</StepLabel>
										</Step>
									))}
								</Stepper>
							</MDBox>
							<MDBox p={2}>
								<MDBox>
									{getStepContent(activeStep)}
									<MDBox
										mt={3}
										width="100%"
										display="flex"
										justifyContent="space-between"
									>
										{activeStep === 0 ? (
											<MDBox />
										) : (
											<MDButton
												variant="outlined"
												color="dark"
												onClick={handleBack}
											>
												НАЗАД
											</MDButton>
										)}
										<MDButton
											variant="gradient"
											color="dark"
											onClick={!isLastStep ? handleNext : undefined}
										>
											{isLastStep ? "send" : "ДАЛЕЕ"}
										</MDButton>
									</MDBox>
								</MDBox>
							</MDBox>
						</Card>
					</Grid>
				</Grid>
			</MDBox>
			<Footer />
		</DashboardLayout>
	);
}

export default Wizard;

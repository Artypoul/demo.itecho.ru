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
import { useNavigate } from "react-router-dom";

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "layouts/templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "layouts/templates/Navbars/DashboardNavbar";
import Footer from "layouts/templates/Footer";

// NewClient page components
import ClientInfo from "layouts/pages/clients/new-client/components/ClientInfo";
import ClientAddress from "layouts/pages/clients/new-client/components/ClientAddress";
import ClientSocials from "layouts/pages/clients/new-client/components/ClientSocials";
import ClientNote from "layouts/pages/clients/new-client/components/ClientNote";

// NewClient layout schemas for form and form feilds from clients/new-client/schemas
import validations from "layouts/pages/clients/new-client/schemas/validations";
import form from "layouts/pages/clients/new-client/schemas/form";
import initialValues from "layouts/pages/clients/new-client/schemas/initialValues";

function getSteps() {
	return ["Инфо", "Адрес", "Соцсети", "Готово"];
}

function getStepContent(stepIndex, formData) {
	switch (stepIndex) {
		case 0:
			return <ClientInfo formData={formData} />;
		case 1:
			return <ClientAddress formData={formData} />;
		case 2:
			return <ClientSocials formData={formData} />;
		case 3:
			return <ClientNote formData={formData} />;
		default:
			return null;
	}
}

function NewClient() {
	const [activeStep, setActiveStep] = useState(0);
	const steps = getSteps();
	const { formId, formField } = form;
	const currentValidation = validations[activeStep];
	const isLastStep = activeStep === steps.length - 1;
	const navigate = useNavigate();

	const sleep = ms =>
		new Promise(resolve => {
			setTimeout(resolve, ms);
		});
	const handleBack = () => setActiveStep(activeStep - 1);

	const submitForm = async (values, actions) => {
		await sleep(1000);

		// eslint-disable-next-line no-alert
		alert(JSON.stringify(values, null, 2));

		actions.setSubmitting(false);
		actions.resetForm();

		// setActiveStep(0);
		navigate("/application/client-list");
	};

	const handleSubmit = (values, actions) => {
		if (isLastStep) {
			submitForm(values, actions);
		} else {
			setActiveStep(activeStep + 1);
			actions.setTouched({});
			actions.setSubmitting(false);
		}
	};

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox py={3} mb={20} height="65vh">
				<Grid
					container
					justifyContent="center"
					alignItems="center"
					sx={{ height: "100%", mt: 8 }}
				>
					<Grid item xs={12} lg={8}>
						<Formik
							initialValues={initialValues}
							validationSchema={currentValidation}
							onSubmit={handleSubmit}
						>
							{({ values, errors, touched, isSubmitting }) => (
								<Form id={formId} autoComplete="off">
									<Card sx={{ height: "100%" }}>
										<MDBox mx={2} mt={-3}>
											<Stepper
												activeStep={activeStep}
												alternativeLabel
											>
												{steps.map(label => (
													<Step key={label}>
														<StepLabel>{label}</StepLabel>
													</Step>
												))}
											</Stepper>
										</MDBox>
										<MDBox p={3}>
											<MDBox>
												{getStepContent(activeStep, {
													values,
													touched,
													formField,
													errors,
												})}
												<MDBox
													mt={2}
													width="100%"
													display="flex"
													justifyContent="space-between"
												>
													{activeStep === 0 ? (
														<MDBox />
													) : (
														<MDButton
															variant="gradient"
															color="light"
															onClick={handleBack}
														>
															НАЗАД
														</MDButton>
													)}
													<MDButton
														disabled={isSubmitting}
														type="submit"
														variant="gradient"
														color="dark"
													>
														{isLastStep ? "Добавить" : "Далее"}
													</MDButton>
												</MDBox>
											</MDBox>
										</MDBox>
									</Card>
								</Form>
							)}
						</Formik>
					</Grid>
				</Grid>
			</MDBox>
			<Footer />
		</DashboardLayout>
	);
}

export default NewClient;

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

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// NewUser page components
import FormField from "layouts/pages/users/new-user/components/FormField";

function RequestCargo({ formData }) {
	const { formField, values, errors, touched } = formData;
	const { cargoLength, cargoWidth, cargoHeight, cargoWeight } = formField;
	const {
		cargoLength: cargoLengthV,
		cargoWidth: cargoWidthV,
		cargoHeight: cargoHeightV,
		cargoWeight: cargoWeightV,
	} = values;

	return (
		<MDBox>
			<MDBox lineHeight={0}>
				<MDTypography variant="h5">ГРУЗ</MDTypography>
				<MDTypography variant="button" color="text">
					Введите пожалуйста характеристики груза
				</MDTypography>
			</MDBox>
			<MDBox mt={1.625}>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<FormField
							type={cargoLength.type}
							label={cargoLength.label}
							name={cargoLength.name}
							value={cargoLengthV}
							placeholder={cargoLength.placeholder}
							error={errors.cargoLength && touched.cargoLength}
							success={cargoLengthV.length > 0 && !errors.cargoLength}
						/>
					</Grid>
					<Grid item xs={12}>
						<FormField
							type={cargoWidth.type}
							label={cargoWidth.label}
							name={cargoWidth.name}
							value={cargoWidthV}
							placeholder={cargoWidth.placeholder}
							error={errors.cargoWidth && touched.cargoWidth}
							success={cargoWidthV.length > 0 && !errors.cargoWidth}
						/>
					</Grid>
					<Grid item xs={6}>
						<FormField
							type={cargoHeight.type}
							label={cargoHeight.label}
							name={cargoHeight.name}
							value={cargoHeightV}
							placeholder={cargoHeight.placeholder}
							error={errors.cargoHeight && touched.cargoHeight}
							success={cargoHeightV.length > 0 && !errors.cargoHeight}
						/>
					</Grid>
					<Grid item xs={6}>
						<FormField
							type={cargoWeight.type}
							label={cargoWeight.label}
							name={cargoWeight.name}
							value={cargoWeightV}
							placeholder={cargoWeight.placeholder}
							error={errors.cargoWeight && touched.cargoWeight}
							success={cargoWeightV.length > 0 && !errors.cargoWeight}
						/>
					</Grid>
				</Grid>
			</MDBox>
		</MDBox>
	);
}

// typechecking props for Socials
RequestCargo.propTypes = {
	formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RequestCargo;

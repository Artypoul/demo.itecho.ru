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

function ClientSocials({ formData }) {
	const { formField, values, errors, touched } = formData;
	const { vk, ok, yapy } = formField;
	const { vk: vkV, ok: okV, yapy: yapyV } = values;

	return (
		<MDBox>
			<MDBox lineHeight={0}>
				<MDTypography variant="h5">Соцсети</MDTypography>
				<MDTypography variant="button" color="text">
					Введите пожалуйста ссылку на соцсети
				</MDTypography>
			</MDBox>
			<MDBox mt={1.625}>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<FormField
							type={vk.type}
							label={vk.label}
							name={vk.name}
							value={vkV}
							placeholder={vk.placeholder}
							error={errors.vk && touched.vk}
							success={vkV.length > 0 && !errors.vk}
						/>
					</Grid>
					<Grid item xs={12}>
						<FormField
							type={ok.type}
							label={ok.label}
							name={ok.name}
							value={okV}
							placeholder={ok.placeholder}
							error={errors.ok && touched.ok}
							success={okV.length > 0 && !errors.ok}
						/>
					</Grid>
					<Grid item xs={12}>
						<FormField
							type={yapy.type}
							label={yapy.label}
							name={yapy.name}
							value={yapyV}
							placeholder={yapy.placeholder}
							error={errors.yapy && touched.yapy}
							success={yapyV.length > 0 && !errors.yapy}
						/>
					</Grid>
				</Grid>
			</MDBox>
		</MDBox>
	);
}

// typechecking props for Socials
ClientSocials.propTypes = {
	formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default ClientSocials;

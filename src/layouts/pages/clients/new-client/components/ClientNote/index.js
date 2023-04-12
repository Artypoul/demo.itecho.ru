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

function ClientNote({ formData }) {
	const { formField, values } = formData;
	const { publicEmail, note } = formField;
	const { publicEmail: publicEmailV, note: noteV } = values;

	return (
		<MDBox>
			<MDTypography variant="h5" fontWeight="bold">
				Примечания
			</MDTypography>
			<MDBox mt={1.625}>
				<Grid container spacing={1}>
					{/* <Grid item xs={ 12 }>
            <FormField
              type={ publicEmail.type }
              label={ publicEmail.label }
              name={ publicEmail.name }
              value={ publicEmailV }
              placeholder={ publicEmail.placeholder }
            />
          </Grid> */}
					<Grid item xs={12}>
						<FormField
							type={note.type}
							label={note.label}
							name={note.name}
							value={noteV}
							placeholder={note.placeholder}
							multiline
							rows={5}
						/>
					</Grid>
				</Grid>
			</MDBox>
		</MDBox>
	);
}

// typechecking props for Profile
ClientNote.propTypes = {
	formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default ClientNote;

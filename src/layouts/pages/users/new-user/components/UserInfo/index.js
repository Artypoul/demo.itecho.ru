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

function UserInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { firstName, lastName, company, referal, email, password, repeatPassword } = formField;
  const {
    firstName: firstNameV,
    lastName: lastNameV,
    company: companyV,
    referal: referalV,
    email: emailV,
    password: passwordV,
    repeatPassword: repeatPasswordV,
  } = values;

  return (
    <MDBox>
      <MDBox lineHeight={ 0 }>
        <MDTypography variant="h5">Карточка клиента</MDTypography>
        <MDTypography variant="button" color="text">
          Заполните информацию о клиенте
        </MDTypography>
      </MDBox>
      <MDBox mt={ 1.625 }>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 } sm={ 12 }>
            <FormField
              type={ firstName.type }
              label={ firstName.label }
              name={ firstName.name }
              value={ firstNameV }
              placeholder={ firstName.placeholder }
              error={ errors.firstName && touched.firstName }
              success={ firstNameV.length > 0 && !errors.firstName }
            />
          </Grid>
          {/* <Grid item xs={ 12 } sm={ 6 }>
            <FormField
              type={ lastName.type }
              label={ lastName.label }
              name={ lastName.name }
              value={ lastNameV }
              placeholder={ lastName.placeholder }
              error={ errors.lastName && touched.lastName }
              success={ lastNameV.length > 0 && !errors.lastName }
            />
          </Grid> */}
        </Grid>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 } sm={ 6 }>
            <FormField
              type={ company.type }
              label={ company.label }
              name={ company.name }
              value={ companyV }
              placeholder={ company.placeholder }
            />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <FormField
              type={ email.type }
              label={ email.label }
              name={ email.name }
              value={ emailV }
              placeholder={ email.placeholder }
              error={ errors.email && touched.email }
              success={ emailV.length > 0 && !errors.email }
            />
          </Grid>
        </Grid>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 } sm={ 6 }>
            <FormField
              type={ referal.type }
              label={ referal.label }
              name={ referal.name }
              value={ referalV }
              placeholder={ referal.placeholder }
              error={ errors.referal && touched.referal }
              success={ referalV.length > 0 && !errors.referal }
              inputProps={ { autoComplete: "" } }
            />
          </Grid>
          {/* <Grid item xs={ 12 } sm={ 6 }>
            <FormField
              type={ repeatPassword.type }
              label={ repeatPassword.label }
              name={ repeatPassword.name }
              value={ repeatPasswordV }
              placeholder={ repeatPassword.placeholder }
              error={ errors.repeatPassword && touched.repeatPassword }
              success={ repeatPasswordV.length > 0 && !errors.repeatPassword }
              inputProps={ { autoComplete: "" } }
            />
          </Grid> */}
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;

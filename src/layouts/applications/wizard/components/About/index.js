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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";

// Wizard application components
import FormField from "layouts/applications/wizard/components/FormField";

// Images
import team2 from "assets/images/team-2.jpg";

function About() {
  return (
    <MDBox>
      <MDBox width="82%" textAlign="center" mx="auto" my={ 4 }>
        <MDBox mb={ 1 }>
          <MDTypography variant="h5" fontWeight="regular">
            Заполните информацию о клиенте
          </MDTypography>
        </MDBox>
        <MDTypography variant="body2" color="text">
          Введите пожалуйста Имя, Фамилию  и контактный номер
        </MDTypography>
      </MDBox>
      <MDBox mt={ 2 }>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 } sm={ 4 } container justifyContent="center">
            <MDBox position="relative" height="max-content" mx="auto">
              <MDAvatar src={ team2 } alt="profile picture" size="xxl" variant="rounded" />
              <MDBox alt="spotify logo" position="absolute" right={ 0 } bottom={ 0 } mr={ -1 } mb={ -1 }>
                <Tooltip title="Edit" placement="top">
                  <MDButton variant="gradient" color="primary" size="small" iconOnly>
                    <Icon>edit</Icon>
                  </MDButton>
                </Tooltip>
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item xs={ 12 } sm={ 8 }>
            <MDBox mb={ 2 }>
              <FormField type="text" label="Имя" />
            </MDBox>
            <MDBox mb={ 2 }>
              <FormField type="text" label="Фамилия" />
            </MDBox>
            <MDBox>
              <FormField type="email" label="Номер телефона" />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default About;

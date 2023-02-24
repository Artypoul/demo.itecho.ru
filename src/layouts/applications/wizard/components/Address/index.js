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

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Wizard application components
import FormField from "layouts/applications/wizard/components/FormField";

function Address() {
  return (
    <MDBox>
      <MDBox width="80%" textAlign="center" mx="auto" my={ 4 }>
        <MDBox mb={ 1 }>
          <MDTypography variant="h5" fontWeight="regular">
            Введите адрес доставки
          </MDTypography>
        </MDBox>
        <MDTypography variant="body2" color="text">
          Начните вводить адрес доставки с улицы, город и индекс подтянется автоматически
        </MDTypography>
      </MDBox>
      <MDBox mt={ 2 }>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 } md={ 8 }>
            <FormField type="text" label="Улица" InputLabelProps={ { shrink: true } } />
          </Grid>
          <Grid item xs={ 12 } md={ 4 }>
            <FormField type="number" label="Индекс" InputLabelProps={ { shrink: true } } />
          </Grid>
          <Grid item xs={ 12 } md={ 7 }>
            <FormField type="text" label="Город" InputLabelProps={ { shrink: true } } />
          </Grid>
          <Grid item xs={ 12 } md={ 5 }>
            <FormField type="text" label="Страна" InputLabelProps={ { shrink: true } } />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default Address;

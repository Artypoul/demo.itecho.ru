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
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function Account() {
  const [design, setDesign] = useState(false);
  const [code, setCode] = useState(false);
  const [develop, setDevelop] = useState(false);

  const handleSetDesign = () => setDesign(!design);
  const handleSetCode = () => setCode(!code);
  const handleSetDevelop = () => setDevelop(!develop);

  const customButtonStyles = ({
    functions: { pxToRem, rgba },
    borders: { borderWidth },
    palette: { transparent, info },
    typography: { size },
  }) => ({
    width: pxToRem(164),
    height: pxToRem(130),
    borderWidth: borderWidth[2],
    mb: 1,
    ml: 0.5,

    "&.MuiButton-contained, &.MuiButton-contained:hover": {
      boxShadow: "none",
      border: `${borderWidth[2]} solid ${transparent.main}`,
    },

    "&:hover": {
      backgroundColor: `${transparent.main} !important`,
      border: `${borderWidth[2]} solid ${info.main} !important`,
      color: rgba(info.main, 0.75),
    },

    "& .material-icons-round": {
      fontSize: `${size["3xl"]} !important`,
    },
  });

  return (
    <MDBox>
      <MDBox width="80%" textAlign="center" mx="auto" my={ 4 }>
        <MDBox mb={ 1 }>
          <MDTypography variant="h5" fontWeight="regular">
          Введите характеристики груза
          </MDTypography>
        </MDBox>
        {/* <MDTypography variant="body2" color="text">
          Заполните информацию о грузе.
        </MDTypography> */}
      </MDBox>
      <MDBox mt={ 2 }>
        <Grid container spacing={ 3 } justifyContent="center">
          <Grid item xs={ 12 } sm={ 3 }>
            <MDBox textAlign="center">
              <MDButton
                color="primary"
                variant={ design ? "contained" : "outlined" }
                onClick={ handleSetDesign }
                sx={ customButtonStyles }
              >
                <Icon sx={ { color: design ? "white" : "inherit" } }>brush</Icon>
              </MDButton>
              <MDTypography variant="h6" sx={ { mt: 1 } }>
              Длина
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={ 12 } sm={ 3 }>
            <MDBox textAlign="center">
              <MDButton
                color="primary"
                variant={ code ? "contained" : "outlined" }
                onClick={ handleSetCode }
                sx={ customButtonStyles }
              >
                <Icon sx={ { color: design ? "white" : "inherit" } }>integration_instructions</Icon>
              </MDButton>
              <MDTypography variant="h6" sx={ { mt: 1 } }>
              Ширина
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={ 12 } sm={ 3 }>
            <MDBox textAlign="center">
              <MDButton
                color="primary"
                variant={ develop ? "contained" : "outlined" }
                onClick={ handleSetDevelop }
                sx={ customButtonStyles }
              >
                <Icon sx={ { color: design ? "white" : "inherit" } }>developer_mode</Icon>
              </MDButton>
              <MDTypography variant="h6" sx={ { mt: 1 } }>
              Высота
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={ 12 } sm={ 3 }>
            <MDBox textAlign="center">
              <MDButton
                color="primary"
                variant={ develop ? "contained" : "outlined" }
                onClick={ handleSetDevelop }
                sx={ customButtonStyles }
              >
                <Icon sx={ { color: design ? "white" : "inherit" } }>developer_mode</Icon>
              </MDButton>
              <MDTypography variant="h6" sx={ { mt: 1 } }>
              Вес
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default Account;

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
import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDBadge from "components/MDBadge";
import MDInput from "components/MDInput";

function ProductInfo() {
	return (
		<MDBox>
			<MDBox>
				<MDTypography variant="h3" fontWeight="bold">
					ООО “Прогресс-НСК”
				</MDTypography>
			</MDBox>
			{/* <MDTypography variant="h4" color="text">
				<Icon>star</Icon>
				<Icon>star</Icon>
				<Icon>star</Icon>
				<Icon>star</Icon>
				<Icon>star_half</Icon>
			</MDTypography> */}
			<MDTypography variant="button" fontWeight="regular">
				До: г.Москва проспект перевозчиков
			</MDTypography>

			<MDBox
				display="grid"
				gridTemplateColumns="repeat(4, auto)"
				gap="5px"
				my={1}
			>
				<MDTypography variant="h6" fontWeight="medium">
					Стоимость
				</MDTypography>
				<MDTypography variant="h6" fontWeight="medium">
					Длина
				</MDTypography>
				<MDTypography variant="h6" fontWeight="medium">
					Ширина
				</MDTypography>
				<MDTypography variant="h6" fontWeight="medium">
					Высота
				</MDTypography>
				<MDTypography variant="h5" fontWeight="medium">
					550,3₽
				</MDTypography>
				<MDTypography variant="h5" fontWeight="medium">
					0,45
				</MDTypography>
				<MDTypography variant="h5" fontWeight="medium">
					0,12
				</MDTypography>
				<MDTypography variant="h5" fontWeight="medium">
					0,24
				</MDTypography>
				<MDBadge
					variant="contained"
					color="success"
					badgeContent="ОПЛАЧЕНО"
					container
				/>
				<MDBadge
					variant="contained"
					color="success"
					badgeContent="СКЛАД 1"
					container
				/>
				<MDBadge
					variant="contained"
					color="success"
					badgeContent="СИДОРОВ П."
					container
				/>
				<MDBadge
					variant="contained"
					color="success"
					badgeContent="В ПУТИ"
					container
				/>
			</MDBox>

			<MDBox mt={3} mb={1} ml={0.5}>
				<MDTypography variant="button" fontWeight="regular">
					Примечание
				</MDTypography>
			</MDBox>
			<MDBox component="ul" m={0} pl={4} mb={2}>
				<MDBox
					component="li"
					color="text"
					fontSize="1.25rem"
					lineHeight={1}
				>
					<MDTypography
						variant="body2"
						color="text"
						fontWeight="regular"
						verticalAlign="middle"
					>
						Коробки упакованные
					</MDTypography>
				</MDBox>
			</MDBox>
			<MDBox
				display="grid"
				gridTemplateColumns="repeat(2, auto)"
				gap="5px"
				mt={3}
				mb={1}
				ml={0.5}
			>
				<MDTypography variant="button" fontWeight="regular">
					Менеджер
				</MDTypography>
				<MDTypography variant="button" fontWeight="regular">
					Склад
				</MDTypography>

				<MDBox component="ul" m={0} pl={4} mb={2}>
					<MDBox
						component="li"
						color="text"
						fontSize="1.25rem"
						lineHeight={1}
					>
						<MDTypography
							variant="body2"
							color="text"
							fontWeight="regular"
							verticalAlign="middle"
						>
							Иванова Мария
						</MDTypography>
					</MDBox>
				</MDBox>
				<MDBox component="ul" m={0} pl={4} mb={2}>
					<MDBox
						component="li"
						color="text"
						fontSize="1.25rem"
						lineHeight={1}
					>
						<MDTypography
							variant="body2"
							color="text"
							fontWeight="regular"
							verticalAlign="middle"
						>
							Воронов Александр
						</MDTypography>
					</MDBox>
				</MDBox>
			</MDBox>
			{/*
				<MDBox
					component="li"
					color="text"
					fontSize="1.25rem"
					lineHeight={1}
				>
					<MDTypography
						variant="body2"
						color="text"
						fontWeight="regular"
						verticalAlign="middle"
					>
						Memory swivel seat returns to original seat position
					</MDTypography>
				</MDBox>
			
			 <MDBox
					component="li"
					color="text"
					fontSize="1.25rem"
					lineHeight={1}
				>
					<MDTypography
						variant="body2"
						color="text"
						fontWeight="regular"
						verticalAlign="middle"
					>
						Comfortable integrated layered chair seat cushion design
					</MDTypography>
				</MDBox>
				<MDBox
					component="li"
					color="text"
					fontSize="1.25rem"
					lineHeight={1}
				>
					<MDTypography
						variant="body2"
						color="text"
						fontWeight="regular"
						verticalAlign="middle"
					>
						Fully assembled! No assembly required
					</MDTypography>
				</MDBox>
			</MDBox> */}

			<MDBox mt={3}>
				<Grid container spacing={3}>
					<Grid item xs={12} lg={4}>
						<MDBox mb={1.5} lineHeight={0} display="inline-block">
							<MDTypography
								component="label"
								variant="button"
								color="text"
								fontWeight="regular"
							>
								Обрешетка
							</MDTypography>
						</MDBox>
						<Autocomplete
							defaultValue="Нет"
							options={["Да", "Нет"]}
							renderInput={params => (
								<MDInput {...params} variant="standard" />
							)}
						/>
					</Grid>
					<Grid item xs={12} lg={4}>
						<MDBox mb={1.5} lineHeight={0} display="inline-block">
							<MDTypography
								component="label"
								variant="button"
								color="text"
								fontWeight="regular"
							>
								Время в пути
							</MDTypography>
						</MDBox>
						<Autocomplete
							defaultValue="1д. 12ч. 35м."
							options={[
								"1д. 12ч. 35м.",
								"1д. 4ч. 35м.",
								"2д. 20ч.",
								"6д. 8ч.",
							]}
							renderInput={params => (
								<MDInput {...params} variant="standard" />
							)}
						/>
					</Grid>
					<Grid item xs={12} lg={4}>
						<MDBox mb={1.5} lineHeight={0} display="inline-block">
							<MDTypography
								component="label"
								variant="button"
								color="text"
								fontWeight="regular"
							>
								Координаты
							</MDTypography>
						</MDBox>
						<Autocomplete
							defaultValue="Ш 55.75  Д 37.6167"
							options={[
								"Ш 55.75  Д 37.6167",
								"Ш 51.81  Д 19.1014",
								"Ш 68.12  Д 42.8128",
							]}
							renderInput={params => (
								<MDInput {...params} variant="standard" />
							)}
						/>
					</Grid>
				</Grid>
			</MDBox>
			<MDBox mt={3}>
				<Grid item xs={12} lg={5} container>
					<MDButton variant="gradient" color="info" fullWidth>
						ГОТОВО
					</MDButton>
				</Grid>
			</MDBox>
		</MDBox>
	);
}

export default ProductInfo;

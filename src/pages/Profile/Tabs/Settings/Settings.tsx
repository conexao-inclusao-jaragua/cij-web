import React, { useState } from "react";

import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import {
	Box,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Slider,
	Typography,
} from "@mui/material";

import ButtonCIJ from "../../../../components/ButtonCIJ/ButtonCIJ";
import Item from "../../../../components/Item/Item";
import Switch from "../../../../components/Switch/Switch";
import { DALTONISM_TYPES, THEME_OPTIONS } from "../../../../constants";
import { useFontSize } from "../../../../hooks/useFontSize";
import { useSwitchTheme } from "../../../../hooks/useSwitchTheme";
import Colors from "./Components/Colors/Colors";
import {
	ActionsContainer,
	SettingsContainer,
	SliderContainer,
} from "./Settings.styled";

const Settings = () => {
	const { getNewFontSize, fontSizeConfig } = useFontSize();
	const { themeMode } = useSwitchTheme();

	// Control form
	const [changedValues, setChangedValues] = useState(false);

	// Font Size
	const [sliderValue, setSliderValue] = useState(0);
	const [newFontSize, setNewFontSize] = useState(fontSizeConfig.default);

	// Screen Reader
	const [screenReader, setScreenReader] = useState(false);

	// Voice Input
	const [voiceInput, setVoiceInput] = useState(false);

	// Theme
	const [themeSelected, setThemeSelected] = useState(themeMode);

	// Daltonism
	const [daltonism, setDaltonism] = useState(DALTONISM_TYPES.DEUTERANOPIA);

	const handleFontSizeChange = (event: any) => {
		const fontSize = getNewFontSize("default", event.target.value);
		if (`${fontSize}rem` === newFontSize) return;

		setNewFontSize(`${fontSize}rem`);
		setSliderValue(event.target.value);
		setChangedValues(true);
	};

	const handleScreenReaderChange = (newValue: boolean) => {
		if (screenReader === newValue) return;

		setScreenReader(newValue);
		setChangedValues(true);
	};

	const handleVoiceInputChange = (newValue: boolean) => {
		if (voiceInput === newValue) return;

		setVoiceInput(newValue);
		setChangedValues(true);
	};

	const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (themeSelected === event.target.value) return;

		setThemeSelected(event.target.value as THEME_OPTIONS);
		setChangedValues(true);
	};

	const handleDaltonismChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (daltonism === event.target.value) return;

		setDaltonism(event.target.value as DALTONISM_TYPES);
		setChangedValues(true);
	};

	function handleSaveButton() {
		setChangedValues(false);
	}

	function handleResetButton() {
		setChangedValues(false);
	}

	return (
		<SettingsContainer>
			<Item title="Tamanho da fonte">
				<SliderContainer>
					<TextDecreaseIcon />
					<Slider
						min={-5}
						max={5}
						value={sliderValue}
						onChange={handleFontSizeChange}
						marks
					/>
					<TextIncreaseIcon />
				</SliderContainer>

				<Box className="h-8">
					<Typography fontSize={newFontSize}>
						O tamanho ficará assim
					</Typography>
				</Box>
			</Item>

			<Item title="Leitor de tela">
				<Switch>
					<Switch.Option
						selected={!screenReader}
						onClick={() => handleScreenReaderChange(false)}
					>
						<Typography
							color={
								!screenReader ? "color01.main" : "color04.main"
							}
							fontSize={fontSizeConfig.medium}
							overflow={"auto"}
						>
							Desligado
						</Typography>
					</Switch.Option>
					<Switch.Option
						selected={screenReader}
						onClick={() => handleScreenReaderChange(true)}
					>
						<Typography
							color={
								screenReader ? "color01.main" : "color04.main"
							}
							fontSize={fontSizeConfig.medium}
							overflow={"auto"}
						>
							Ligado
						</Typography>
					</Switch.Option>
				</Switch>
			</Item>

			<Item title="Captura de voz">
				<Switch>
					<Switch.Option
						selected={!voiceInput}
						onClick={() => handleVoiceInputChange(false)}
					>
						<Typography
							color={
								!voiceInput ? "color01.main" : "color04.main"
							}
							fontSize={fontSizeConfig.medium}
							overflow={"auto"}
						>
							Desligado
						</Typography>
					</Switch.Option>
					<Switch.Option
						selected={voiceInput}
						onClick={() => handleVoiceInputChange(true)}
					>
						<Typography
							color={voiceInput ? "color01.main" : "color04.main"}
							fontSize={fontSizeConfig.medium}
							overflow={"auto"}
						>
							Ligado
						</Typography>
					</Switch.Option>
				</Switch>
			</Item>

			<Item title="Tema">
				<FormControl>
					<RadioGroup
						row
						value={themeSelected}
						onChange={handleThemeChange}
					>
						<FormControlLabel
							value={THEME_OPTIONS.LIGHT}
							control={<Radio />}
							label="Claro"
						/>
						<FormControlLabel
							value={THEME_OPTIONS.DARK}
							control={<Radio />}
							label="Escuro"
						/>
					</RadioGroup>
				</FormControl>
			</Item>

			<Item title="Modo daltonismo">
				<FormControl>
					<RadioGroup
						row
						value={daltonism}
						onChange={handleDaltonismChange}
					>
						<FormControlLabel
							value={DALTONISM_TYPES.DEUTERANOPIA}
							control={<Radio />}
							label="Deuteranopia"
						/>
						<FormControlLabel
							value={DALTONISM_TYPES.PROTANOPIA}
							control={<Radio />}
							label="Protanopia"
						/>
						<FormControlLabel
							value={DALTONISM_TYPES.TRITANOPIA}
							control={<Radio />}
							label="Tritaonopia"
						/>
					</RadioGroup>
				</FormControl>
			</Item>

			<Item title="Cores do sistema">
				<Colors />
			</Item>

			<ActionsContainer>
				<ButtonCIJ
					variant="outlined"
					text="Voltar ao padrão"
					enabled={changedValues}
					onClick={handleResetButton}
				/>

				<ButtonCIJ
					variant="contained"
					text="Salvar configurações"
					enabled={changedValues}
					onClick={handleSaveButton}
				/>
			</ActionsContainer>
		</SettingsContainer>
	);
};

export default Settings;

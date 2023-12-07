import React, { useState } from "react";

import {
	Box,
	Container,
	List,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import { BoxLeftColumn, BoxRightColumn } from "./Profile.styled";

import PersonalData from "./Tabs/PersonalData/PersonalData";
import Disability from "./Tabs/Disability/Disability";
import Address from "./Tabs/Address/Address";
import Curriculum from "./Tabs/Curriculum/Curriculum";
import Settings from "./Tabs/Settings/Settings";

const Profile = () => {
	const [tab, setTab] = useState(PersonalData);
	const [clickedColor, setClickedColor] = useState(1);

	return (
		<Container>
			<p className="title">Meu perfil</p>

			<Box sx={{ display: "flex", width: "100%" }}>
				<BoxLeftColumn>
					<List>
						<ListItemButton
							onClick={() => {
								setTab(PersonalData);
								setClickedColor(0);
							}}
						>
							{clickedColor == 0 ? (
								<ListItemText
									primary="Dados pessoais"
									sx={{ color: "#004AAD" }}
								/>
							) : (
								<ListItemText primary="Dados pessoais" />
							)}
						</ListItemButton>

						<ListItemButton
							onClick={() => {
								setTab(Disability);
								setClickedColor(1);
							}}
						>
							{clickedColor == 1 ? (
								<ListItemText
									primary="Deficiência"
									sx={{ color: "#004AAD" }}
								/>
							) : (
								<ListItemText primary="Deficiência" />
							)}
						</ListItemButton>

						<ListItemButton
							onClick={() => {
								setTab(Address);
								setClickedColor(2);
							}}
						>
							{clickedColor == 2 ? (
								<ListItemText
									primary="Endereço"
									sx={{ color: "#004AAD" }}
								/>
							) : (
								<ListItemText primary="Endereço" />
							)}
						</ListItemButton>

						<ListItemButton
							onClick={() => {
								setTab(Curriculum);
								setClickedColor(3);
							}}
						>
							{clickedColor == 3 ? (
								<ListItemText
									primary="Currículo"
									sx={{ color: "#004AAD" }}
								/>
							) : (
								<ListItemText primary="Currículo" />
							)}
						</ListItemButton>

						<ListItemButton
							onClick={() => {
								setTab(Settings);
								setClickedColor(4);
							}}
						>
							{clickedColor == 4 ? (
								<ListItemText
									primary="Configurações"
									sx={{ color: "#004AAD" }}
								/>
							) : (
								<ListItemText primary="Configurações" />
							)}
						</ListItemButton>
					</List>
				</BoxLeftColumn>

				<BoxRightColumn>{tab}</BoxRightColumn>
			</Box>
		</Container>
	);
};

export default Profile;

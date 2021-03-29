import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevState => !prevState);

	return (
		<nav className="navbar navbar bg mb-3">
			<Link to="/">
				<a className="navbar-brand" href="#">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
						width="90px"
					/>
				</a>
			</Link>
			<Dropdown className="mx-5" isOpen={dropdownOpen} toggle={toggle}>
				<DropdownToggle outline color="warning" caret>
					<strong>Favorites {store.favorites.length}</strong>
				</DropdownToggle>
				<DropdownMenu style={{ backgroundColor: "rgb(255, 190, 0)" }}>
					{store.favorites.map((item, i) => {
						return (
							<li key={i}>
								<DropdownItem>
									{item.name}

									<button className="remove" onClick={() => actions.deleteFavorites(i)}>
										<i className="fas fa-trash" />
									</button>
								</DropdownItem>
							</li>
						);
					})}
				</DropdownMenu>
			</Dropdown>
		</nav>
	);
};

import React, { useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card" style={{ backgroundColor: "gray", width: "18rem", margin: "1rem", padding: "1rem" }}>
			<Link to={"/planetsDetail/" + props.id}>
				<img src={props.url} className="card-img-top" />
			</Link>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					{" "}
					<ul className="characters">
						<li>Population: {props.name} </li>
						<li>Terrain: {props.terrain}</li>
					</ul>
				</p>
				<Link
					to={"/planetsDetail/" + props.id}
					href="#"
					className="btn btn-outline-primary "
					style={{ margin: "10px" }}>
					Learn more!
				</Link>
				<Link
					onClick={() => actions.addFavorites(props.name, "planets")}
					type="button"
					href="#"
					className="btn btn-outline-warning">
					<i className="far fa-heart" />
				</Link>
			</div>
		</div>
	);
};
Planets.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string,
	id: PropTypes.number,
	population: PropTypes.string,
	terrain: PropTypes.string,
	climate: PropTypes.string
};

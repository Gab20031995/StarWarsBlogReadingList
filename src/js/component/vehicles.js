import React, { useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card" style={{ backgroundColor: "gray", width: "18rem", margin: "1rem", padding: "1rem" }}>
			<Link to={"/vehiclesDetail/" + props.id}>
				<img src={props.url} className="card-img-top" />
			</Link>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					{" "}
					<ul className="characters">
						<li>Passengers: {props.passengers}</li>
						<li>Model: {props.model} </li>
					</ul>
				</p>
				<Link
					to={"/vehiclesDetail/" + props.id}
					href="#"
					className="btn btn-outline-primary "
					style={{ margin: "10px" }}>
					Learn more!
				</Link>
				<Link
					onClick={() => actions.addFavorites(props.name, "vehicles")}
					type="button"
					href="#"
					className="btn btn-outline-warning">
					<i className="far fa-heart" />
				</Link>
			</div>
		</div>
	);
};
Vehicles.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string,
	id: PropTypes.number,
	passengers: PropTypes.number,
	model: PropTypes.string
};

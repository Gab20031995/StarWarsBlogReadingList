import React, { useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card" style={{ backgroundColor: "gray", width: "18rem", padding: "1rem", margin: "1rem" }}>
			<Link to={"/peopleDetail/" + props.id}>
				<img src={props.url} className="card-img-top" />
			</Link>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					{" "}
					<ul className="characters">
						<li>Gender: {props.gender}</li>
						<li>Eye color: {props.eye_color}</li>
						<li>Hair color: {props.hair_color}</li>
					</ul>
				</p>
				<Link to={"/peopleDetail/" + props.id}>
					<button className="btn btn-outline-primary " style={{ margin: "10px" }}>
						Learn more!
					</button>
				</Link>
				<Link
					onClick={() => actions.addFavorites(props.name, "people")}
					type="button"
					href="#"
					className="btn btn-outline-warning">
					<i className="far fa-heart" />
				</Link>
			</div>
		</div>
	);
};
People.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string,
	gender: PropTypes.string,
	eye_color: PropTypes.string,
	hair_color: PropTypes.string,
	dir: PropTypes.string,
	hair_color: PropTypes.string,
	id: PropTypes.number
};

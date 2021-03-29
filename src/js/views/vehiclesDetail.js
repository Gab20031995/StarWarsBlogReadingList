import React, { useState, useEffect, useContext, Component } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Vehicles } from "../component/vehicles";
import vehiclesImages from "../component/vehiclesImages";

import "../../styles/home.scss";

export const VehiclesDetail = props => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	return (
		<div>
			{store.vehicles
				? store.vehicles.map((item, index) => {
						if (id == index) {
							return (
								<div key={index}>
									<div className="container-fluid">
										<div className="jumbotron top1" style={{ backgroundColor: "gray" }}>
											<div className="row">
												<div className="col-3">
													<img
														src={vehiclesImages[index + 1]}
														className="card-img-top1"
														alt="Responsive image"
														width="490px"
														height="430px"
													/>
												</div>
												<div className="col">
													<h1 className="display-4">Vehicle: {item.name} </h1>

													<p style={{ textAlign: "justify" }}>
														En Star Wars existen inumerables vehículos y formas de
														propulsión. La mayoría de estos suelen tener un sistema de
														repulsión que los hace literalmente flotar sobre el suelo.
														Además, también hay una gran variedad de vehículos tanto aéreos
														como espaciales. Otros vehículos son sencillamente tanques
														zoomorfos que caminan como animales sobre los suelos de los más
														inhóspitos planetas.
													</p>
												</div>
											</div>
											<div
												className="row text-justify"
												style={{ marginTop: "20px", borderTop: "2px solid black" }}>
												<div className="col-2">
													<p className="asize">
														Name:
														<br />
														{item.name}
													</p>
												</div>
												<div className="col-2">
													<p className="asize">
														Model:
														<br />
														{item.model}
													</p>
												</div>
												<div className="col-2">
													<p className="asize">
														length:
														<br />
														{item.length}
													</p>
												</div>
												<div className="col-2">
													<p className="asize">
														Capacity:
														<br />
														{item.cargo_capacity}
													</p>
												</div>
												<div className="col-2">
													<p className="asize">
														Pasengers:
														<br />
														{item.passengers}
													</p>
												</div>
												<div className="col-2">
													<p className="asize">
														Model:
														<br />
														{item.model}
													</p>
												</div>
											</div>
											<hr className="my-4" />

											<Link to="/">
												<span className="btn btn-outline-warning btn-lg" href="#" role="button">
													Back home
												</span>{" "}
											</Link>
										</div>
									</div>
								</div>
							);
						}
				  })
				: ""}
		</div>
	);
};
VehiclesDetail.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string,
	dir: PropTypes.string,
	id: PropTypes.string,
	passengers: PropTypes.number,
	model: PropTypes.string,
	height: PropTypes.number,
	length: PropTypes.number,
	terrain: PropTypes.string
};

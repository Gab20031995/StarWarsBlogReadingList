import React, { useState, useEffect, useContext, Component } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Planets } from "../component/planets";
import planetsImages from "../component/planetsImages";

import "../../styles/home.scss";

export const PlanetsDetail = props => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	return (
		<div>
			{store.planets
				? store.planets.map((item, index) => {
						if (id == index) {
							return (
								<div key={index}>
									<div className="container-fluid">
										<div className="jumbotron top1" style={{ backgroundColor: "gray" }}>
											<div className="row">
												<div className="col-3">
													<img
														src={planetsImages[index + 1]}
														className="card-img-top1"
														alt="Responsive image"
														width="490px"
														height="430px"
													/>
												</div>
												<div className="col">
													<h1 className="display-4">Planeta: {item.name} </h1>

													<p style={{ textAlign: "justify" }}>
														Los acontecimientos tienen lugar en una galaxia ficticia de
														nombre desconocido y en un tiempo no especificado solo se dice
														que fue «hace mucho tiempo, en una galaxia muy, muy lejana». Los
														viajes espaciales son comunes y la mayoría de los planetas que
														aparecen en la saga están afiliados a la República Galáctica, la
														unión democrática que rige la galaxia y cuyo gobierno, presidido
														por un canciller supremo, está formado por representantes de
														toda ella, elegidos o designados y agrupados en el llamado
														Senado Galáctico, ubicado en el planeta Coruscant.​ En oposición
														a la República se encuentra la Confederación de Sistemas
														Independientes (Separatistas), siendo el enfrentamiento de ambas
														uno de los temas más importantes en la trama de las tres
														primeras películas de Star Wars.
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
														Climate:
														<br />
														{item.climate}
													</p>
												</div>
												<div className="col-2">
													<p className="asize">
														Population:
														<br />
														{item.population}
													</p>
												</div>
												<div className="col-2">
													<p className="asize">
														Orbital Period :<br />
														{item.orbital_period}
													</p>
												</div>
												<div className="col-2">
													<p className="asize">
														Rotation Period :<br />
														{item.rotation_period}
													</p>
												</div>
												<div className="col-2">
													<p className="asize">
														Diameter :<br />
														{item.diameter}
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
PlanetsDetail.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string,
	dir: PropTypes.string,
	id: PropTypes.string
};

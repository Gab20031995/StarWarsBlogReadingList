import React, { useState, useEffect, useContext, Component } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { People } from "../component/people";
import peopleImages from "../component/peopleImages";
// import peopleVideo from "../views/peopleVideo";
// import ReactPlayer from "react-player";

import "../../styles/home.scss";

export const PeopleDetail = props => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	return (
		<div>
			{store.people
				? store.people.map((item, index) => {
						if (id == index) {
							return (
								<div key={index}>
									<div className="container-fluid">
										<div className="jumbotron top1" style={{ backgroundColor: "gray" }}>
											<div className="row">
												<img
													src={peopleImages[index + 1]}
													className="card-img-top1"
													alt="Responsive image"
													width="600px"
													height="500px"
												/>
												<div className="col">
													<h1 className="asize">Personaje: {item.name} </h1>

													<p style={{ textAlign: "justify" }}>
														Además de la raza humana, se describen múltiples tipos de
														especies extraterrestres procedentes de los numerosos planetas y
														satélites que forman dicha galaxia y que pertenecen a la alianza
														de planetas de la República Galáctica. Existen dos grupos de
														humanos que son sensibles a la Fuerza pero que poseen ideologías
														diferentes entre sí: los Jedi y los Sith. La estructura
														jerárquica de la orden Jedi incluye a los maestros, como Obi-Wan
														Kenobi, Luke Skywalker y Yoda; sus aprendices o también
														conocidos como padawan; los iniciados o younglings que suelen
														ser menores de edad; y los caballeros, cuyo estatus progresa al
														de un maestro una vez que concluyen el entrenamiento de su
														respectivo aprendiz. Además de los anteriores, existen otros
														tipos de Jedi que persiguen fines específicos: por ejemplo, los
														guardianes, los centinelas y los consulares. Los Sith poseen una
														estructura similar, en la que un maestro puede tener aprendices
														bajo su tutela, aunque también incluyen a otros miembros como
														los Jedi oscuros y los Inquisidores. Los primeros comprenden
														aquellos que «contravienen el código Jedi», mientras que los
														Inquisidores constituyen «una organización de agentes sensibles
														a la Fuerza que trabajaban para el Imperio». Algunos ejemplos de
														Sith, Jedi oscuros e Inquisidores son Darth Sidious y Darth
														Vader, Asajj Ventress, y el Gran Inquisidor, respectivamente. A
														su vez, entre los funcionarios imperiales se pueden mencionar
														Orson Krennic, Wilhuff Tarkin y Moff Gideon.
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
														Birth:
														<br />
														{item.birth_year}
													</p>
												</div>
												<div className="col-2">
													<p className="asize">
														Gender:
														<br />
														{item.gender}
													</p>
												</div>
												<div className="col-2">
													<p className="asize">
														Height:
														<br />
														{item.height}
													</p>
												</div>
												<div className="col-2">
													<p className="asize">
														Skin Color:
														<br />
														{item.skin_color}
													</p>
												</div>
												<div className="col-2">
													<p className="asize">
														Eye Color:
														<br />
														{item.eye_color}
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
PeopleDetail.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string,
	gender: PropTypes.string,
	eye_color: PropTypes.string,
	hair_color: PropTypes.string,
	dir: PropTypes.string,
	id: PropTypes.string
};

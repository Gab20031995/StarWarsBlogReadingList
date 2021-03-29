import React, { useContext, useEffect, Component } from "react";
import "../../styles/home.scss";
import { People } from "../component/people";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";
import { Context } from "../store/appContext";
import peopleImages from "../component/peopleImages";
import planetsImages from "../component/planetsImages";
import vehiclesImages from "../component/vehiclesImages";
import ReactPlayer from "react-player";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.people[0]);

	return (
		<div className="container">
			<div className="jumbotron top d-flex justify-content-center" style={{ backgroundColor: "gray" }}>
				<div className="row">
					<div>
						<img src="http://www.dinosoria.com/gifs/star19.gif" width="200px" />
					</div>
					<div className="col">
						<ReactPlayer
							url="https://www.youtube.com/watch?v=2rvjypNhiXw"
							className="react-player"
							playing
							width="540px"
							height="260px"
							playsinline={false}
						/>
					</div>
					<div>
						<img src="http://www.dinosoria.com/gifs/star19.gif" width="200px" />
					</div>
				</div>
			</div>
			<h1 style={{ color: "gray" }}>Characters</h1>

			<div id="scroll" className="scrolling-wrapper row flex-row flex-nowrap">
				{store.people
					? store.people.map((item, index) => {
							return (
								<div key={index}>
									<People
										name={item.name}
										url={peopleImages[index + 1]}
										dir={item.url}
										id={index}
										gender={item.gender}
										eye_color={item.eye_color}
										hair_color={item.hair_color}
									/>
								</div>
							);
					  })
					: "No people here"}
			</div>

			<br />

			<h1 style={{ color: "gray" }}>Planets</h1>

			<div id="scroll" className="scrolling-wrapper row flex-row flex-nowrap">
				{store.planets
					? store.planets.map((item, index) => {
							return (
								<div key={index}>
									<Planets
										name={item.name}
										population={item.population}
										terrain={item.terrain}
										climate={item.climate}
										url={planetsImages[index + 1]}
										uid={item.uid}
										dir={item.url}
										id={index}
									/>
								</div>
							);
					  })
					: "No planets here"}
			</div>

			<br />

			<h1 style={{ color: "gray" }}>Vehicles</h1>

			<div id="scroll" className="scrolling-wrapper row flex-row flex-nowrap">
				{store.vehicles
					? store.vehicles.map((item, index) => {
							return (
								<div key={index}>
									<Vehicles
										name={item.name}
										passengers={item.passengers}
										model={item.model}
										height={item.height}
										long={item.long}
										terrain={item.terrain}
										url={vehiclesImages[index + 1]}
										uid={item.uid}
										dir={item.url}
										id={index}
									/>
								</div>
							);
					  })
					: "No Vehicles here"}
			</div>
			<br />
			<div />
			<hr />
		</div>
	);
};

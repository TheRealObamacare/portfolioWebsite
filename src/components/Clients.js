import React from 'react';
import { clientsHeading, clientsData } from '../data/clientsData';

const Clients = () => {
	return (
		<section>
			<h2>{clientsHeading}</h2>
			<div>
				{clientsData.map(client => (
					<div key={client.id}>
						<img src={client.img} alt={client.title} />
						<h3>{client.title}</h3>
					</div>
				))}
			</div>
		</section>
	);
};

export default Clients;

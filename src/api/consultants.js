import resource from 'resource-router-middleware';
import consultants from '../models/consultants';

export default ({ config }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'consultant',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		let consultant = consultants.find(consultant => consultant.id === id ),
			err = consultant ? null : 'Not found';
		callback(err, consultant);
	},

	/** GET / - List all entities */
	index({ params }, res) {
		res.json(consultants);
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		body.id = consultants.length.toString(36);

		if ('sponsorId' in body) {
			let sponsorId = body['sponsorId'];

			if (!consultants.find(consultant => consultant.id === sponsorId)) {
				res.status(422)
				res.send(`No sponsor found with id='${sponsorId}'`);
			} else {
				consultants.push(body);
				res.json(body);
			}
		} else {
			consultants.push(body);
			res.json(body);
		}
	},

	/** GET /:id - Return a given entity */
	read({ consultant }, res) {
		res.json(consultant);
	},

	/** PUT /:id - Update a given entity */
	update({ consultant, body }, res) {
		for (let key in body) {
			if (key!=='id') {
				consultant[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({ consultant }, res) {
		consultants.splice(consultants.indexOf(consultant), 1);
		res.sendStatus(204);
	}
});

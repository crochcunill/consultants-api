import { version } from '../../package.json';
import { Router } from 'express';
import consultants from './consultants';

export default ({ config }) => {
	let api = Router();

	// mount the consultants resource
	api.use('/consultants', consultants({ config }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}

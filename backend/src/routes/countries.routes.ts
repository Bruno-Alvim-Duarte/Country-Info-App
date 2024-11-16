import { Router } from 'express';
import * as countriesController from '../controllers/countries.controller';

const countriesRouter = Router();

countriesRouter.get('/', countriesController.index);
countriesRouter.get('/:countryCode', countriesController.show);

export default countriesRouter;

import { Request, Response } from "express";
import * as countriesService from '../services/countries.service';

export const index = async (_req: Request, res: Response): Promise<void> => {
    try {
        const countries = await countriesService.index();
        res.status(200).json(countries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch countries." });
    }
};


export const show = async (req: Request, res: Response) => {
    try {
        const { countryCode } = req.params;
        const countrie = await countriesService.show(countryCode);
        res.status(200).json(countrie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch country." });
    }
}
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = exports.index = void 0;
const countriesService = __importStar(require("../services/countries.service"));
const index = async (_req, res) => {
    try {
        const countries = await countriesService.index();
        res.status(200).json(countries);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch countries." });
    }
};
exports.index = index;
const show = async (req, res) => {
    try {
        const { countryCode } = req.params;
        const countrie = await countriesService.show(countryCode);
        res.status(200).json(countrie);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch country." });
    }
};
exports.show = show;

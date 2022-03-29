import { Hr } from "../models/hr";
import { Developer } from "../models/developer";

const anilHr = new Hr(1, 'anil', 1000, 2000, 3000, 4000)
const sunilDeveloper = new Developer(1, 'sunil', 1500, 2500, 3500, 4500)

export const employees = [anilHr, sunilDeveloper]
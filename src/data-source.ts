import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Request } from "./entity/Request"
import { MedicalCertificate } from "./entity/MedicalCertificate"
import { PersonalData } from "./entity/PersonalData"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "teste",
    synchronize: true,
    logging: false,
    entities: [User, Request, MedicalCertificate, PersonalData],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})

import { User } from "./entity/User"
import { AppDataSource } from "./data-source"
import { RequestRepository } from "./repositories/requestRepository";
import { MedicalCertificate } from "./entity/MedicalCertificate";
import { AbstractPolymorphicRepository } from "typeorm-polymorphic";

AppDataSource.initialize().then(async () => {
    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Lucas"
    user.lastName = "Fonseca"
    user.age = 29
    await AppDataSource.manager.save(user)

    console.log("Inserting a new medical certificate into the database...")
    const medicalCertificate = new MedicalCertificate()
    medicalCertificate.name = 'Foo bar'
    await AppDataSource.manager.save(medicalCertificate)

    const repository = AbstractPolymorphicRepository.createRepository(
      AppDataSource, // where `dataSource` is a typeorm DataSource object
      RequestRepository,
    );

    console.log("Inserting two requests, one for User and one for MedicalCertificate...")
    /** Ao invés de repository.create poderíamos também instaciar cada classe separada */
    await repository.save([
      repository.create({
        name: 'Solicitação 1',
        owner: user
      }),
      repository.create({
        name: 'Solicitação 2',
        owner: medicalCertificate
      })
    ])

    console.log("Findone where name equals 'Solicitação 1'...")
    const requestFinded = await repository.findOne({ where: { name: 'Solicitação 1' } })

    console.log(requestFinded)
}).catch(error => console.log(error))

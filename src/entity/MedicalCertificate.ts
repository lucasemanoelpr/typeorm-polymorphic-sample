import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Request } from "./Request"
import { PolymorphicChildren } from "typeorm-polymorphic"

@Entity('medical_certificate')
export class MedicalCertificate {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @PolymorphicChildren(() => Request, {
      eager: false,
    })
    request: Request;
}

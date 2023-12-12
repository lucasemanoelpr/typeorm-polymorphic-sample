import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { PolymorphicParent } from "typeorm-polymorphic";
import { PolymorphicChildInterface } from "typeorm-polymorphic/dist/polymorphic.interface";
import { MedicalCertificate } from "./MedicalCertificate";
import { PersonalData } from "./PersonalData";
import { User } from "./User";

@Entity('requests')
export class Request implements PolymorphicChildInterface {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ name: 'entity_id' })
    entityId: number;

    @Column({ name: 'entity_type' })
    entityType: string;

    @PolymorphicParent(() => [MedicalCertificate, PersonalData, User], { eager: true })
    owner: MedicalCertificate | PersonalData | User;
}

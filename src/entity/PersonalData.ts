import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Request } from "./Request";
import { PolymorphicChildren } from "typeorm-polymorphic";

@Entity('personal_data')
export class PersonalData {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @PolymorphicChildren(() => Request, {
      eager: false,
    })
    request: Request;
}

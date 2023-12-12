import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Request } from "./Request"
import { PolymorphicChildren } from "typeorm-polymorphic"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @PolymorphicChildren(() => Request, {
      eager: false,
    })
    requests: Request[];

}

import { AbstractPolymorphicRepository, PolymorphicRepository } from 'typeorm-polymorphic';
import { Request } from '../entity/Request';

@PolymorphicRepository(Request)
export class RequestRepository extends AbstractPolymorphicRepository<Request> {}
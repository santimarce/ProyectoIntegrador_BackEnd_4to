import { EntityRepository, Repository } from 'typeorm';
import { Catalogo } from '../entities/catalogo.entity';

@EntityRepository(Catalogo)
export class CatalogoRepository extends Repository<Catalogo> {
    async findOneByTipo(tipo: string): Promise<Catalogo> {
        return this.findOne({ where: { tipo } });
    }
}


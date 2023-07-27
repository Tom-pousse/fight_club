import { AppDataSource } from "../data-source";
import { Hero } from "../models/interfaces/HeroInterface";

/**
 * Le role du service est d'aller chercher les données,
 * pour les mettre à disposition de controlleur.
 */
export class HeroService {
  getAllHeros(): Promise<Hero[]> {
    return AppDataSource.query(`SELECT * FROM hero;`);
  }

  getOneHeroById(id: number): Promise<Hero> {
    return AppDataSource.query(`SELECT * FROM hero WHERE id_id = ${id}`);
  }

  createNewHero(newHero: Hero): Promise<any> {
    return AppDataSource.query(
      `INSERT INTO hero (nom_name,num_power,num_life) VALUES 
      ('${newHero.name}',${newHero.power},${newHero.life});`
    );
  }

  updateOneHero(id: number, changes: Hero): Promise<any> {
    return AppDataSource.query(`UPDATE hero 
    set nom_name = '${changes.name}', num_power= ${changes.power},num_life = ${changes.life}
    WHERE id_id = ${id};`);
  }

  deleteOneHero(id: number): Promise<any> {
    return AppDataSource.query(`DELETE from hero
    WHERE id_id = ${id}`);
  }
}

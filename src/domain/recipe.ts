export class Recipe {
  _name!: string;
  _category?: string;
  _time!: number;

  constructor(aName: string, aTime: number) {
    this.name = aName;
    this.time = aTime;
  }

  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get time(): number{
    return this._time;
  }

  set time(aTime: number){
    this._time = aTime;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  toString(): string {
    return `Receta: ${this.name} \n- Categoría: ${this.category} \n- Tiempo de preparacion: ${this.time} minutos`;
  }
}

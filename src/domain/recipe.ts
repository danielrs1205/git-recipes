export class Recipe {
  _name!: string;
  _category?: string;
  _prepTime!: number;

  constructor(aName: string, aPrepTime: number) {
    this.name = aName;
    this.prepTime = aPrepTime;
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

  get prepTime(): number {
    return this._prepTime;
  }

  set prepTime(aPrepTime: number) {
    if (Number.isNaN(aPrepTime) || aPrepTime < 0) {
      throw new Error(
        "El tiempo de preparación debe ser un número mayor o igual a 0.",
      );
    }
    this._prepTime = aPrepTime;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  toString(): string {
    return `Receta: ${this.name} \n- Categoría: ${this.category} \n- Tiempo de preparación: ${this.prepTime} minutos`;
  }
}

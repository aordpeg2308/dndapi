export interface Monstruo {
    index:                  string;
    name:                   string;
    size:                   string;
    type:                   string;
    alignment:              string;
    armor_class:            ArmorClass[];
    hit_points:             number;
    hit_dice:               string;
    hit_points_roll:        string;
    speed:                  Speed;
    strength:               number;
    dexterity:              number;
    constitution:           number;
    intelligence:           number;
    wisdom:                 number;
    charisma:               number;
    proficiencies:          ProficiencyElement[];
    damage_vulnerabilities: any[];
    damage_resistances:     any[];
    damage_immunities:      any[];
    condition_immunities:   any[];
    senses:                 Senses;
    languages:              string;
    challenge_rating:       number;
    proficiency_bonus:      number;
    xp:                     number;
    special_abilities:      SpecialAbility[];
    actions:                Action[];
    image:                  string;
    url:                    string;
    legendary_actions:      any[];
}

export interface Action {
    name:         string;
    desc:         string;
    attack_bonus: number;
    damage:       Damage[];
    actions:      any[];
}

export interface Damage {
    damage_type: DamageTypeClass;
    damage_dice: string;
}

export interface DamageTypeClass {
    index: string;
    name:  string;
    url:   string;
}

export interface ArmorClass {
    type:  string;
    value: number;
}

export interface ProficiencyElement {
    value:       number;
    proficiency: DamageTypeClass;
}

export interface Senses {
    passive_perception: number;
}

export interface SpecialAbility {
    name: string;
    desc: string;
}

export interface Speed {
    walk: string;
}

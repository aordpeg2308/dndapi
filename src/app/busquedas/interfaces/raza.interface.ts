export interface Raza {
    index:                        string;
    name:                         string;
    speed:                        number;
    ability_bonuses:              AbilityBonus[];
    alignment:                    string;
    age:                          string;
    size:                         string;
    size_description:             string;
    starting_proficiencies:       Language[];
    starting_proficiency_options: StartingProficiencyOptions;
    languages:                    Language[];
    language_desc:                string;
    traits:                       Language[];
    subraces:                     Language[];
    url:                          string;
}

export interface AbilityBonus {
    ability_score: Language;
    bonus:         number;
}

export interface Language {
    index: string;
    name:  string;
    url:   string;
}

export interface StartingProficiencyOptions {
    desc:   string;
    choose: number;
    type:   string;
    from:   From;
}

export interface From {
    option_set_type: string;
    options:         Option[];
}

export interface Option {
    option_type: string;
    item:        Language;
}

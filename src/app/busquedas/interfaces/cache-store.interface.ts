import { Monstruo } from "./monstruo.interface";
import { Raza } from "./raza.interface";


export interface CacheStore {

porRaza: razasCache;
porMonstruo: monstruoCache;
    
}

export interface razasCache{
    term : string;
    raza?:  Raza;
}
export interface monstruoCache{

    term: string;
    monstruo?: Monstruo;
}
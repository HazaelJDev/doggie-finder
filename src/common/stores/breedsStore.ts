import { atom } from 'nanostores';

export const breedStore = atom<string[]>([]);

export function addBreed(breed: string) {
    breedStore.set([...breedStore.get(), breed]);
}

export function addBreeds(allBreeds: string[]) {
    breedStore.set(allBreeds);
}

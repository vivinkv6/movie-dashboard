"use client"

import { useGenreStore } from "@/store/genreStore"

const genre=useGenreStore.getState().genre
export const fetchGenre=()=>{
    console.log(genre);
    return genre;
}
import { NextResponse } from "next/server";

export const listaDeCamisas = [
    {
        id: 1,
        titulo: "FC Barcelona",
        Valor: "169.90",
        anoPublicacao: 2024,
        genero: "Moda"
    },
    {
        id: 2,
        titulo: "São Paulo FC",
        Valor: "169,90",
        anoPublicacao: 2024,
        genero: "Moda"
    },
    {
        id: 3,
        titulo: "Real Madrid",
        Valor: "169,90",
        anoPublicacao: 2024,
        genero: "Moda"
    },
    {
        id: 4,
        titulo: "Manchester United",
        Valor: "169,90",
        anoPublicacao: 2024,
        genero: "Moda"
    },
    {
        id: 5,
        titulo: "Arsenal",
        Valor: "169,90",
        anoPublicacao: 2024,
        genero: "Moda"
    }
];

export async function GET(){
    return NextResponse.json(listaDeCamisas)
}
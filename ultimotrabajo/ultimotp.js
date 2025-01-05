// Array de objetos libros
const libros = [
    {
        id: 1,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        año: 1967,
        genero: "Realismo mágico",
        disponible: true
    },
    {
        id: 2,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        año: 1605,
        genero: "Novela",
        disponible: false
    },
    {
        id: 3,
        titulo: "1984",
        autor: "George Orwell",
        año: 1949,
        genero: "Distopía",
        disponible: true
    },
    {
        id: 4,
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        año: 1953,
        genero: "Ciencia ficción",
        disponible: true
    },
    {
        id: 5,
        titulo: "El gran Gatsby",
        autor: "F. Scott Fitzgerald",
        año: 1925,
        genero: "Drama",
        disponible: false
    },
    {
        id: 6,
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        año: 1813,
        genero: "Romántico",
        disponible: true
    },
    {
        id: 7,
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        año: 2001,
        genero: "Misterio",
        disponible: true
    },
    {
        id: 8,
        titulo: "El Código Da Vinci",
        autor: "Dan Brown",
        año: 2003,
        genero: "Thriller",
        disponible: false
    },
    {
        id: 9,
        titulo: " cuidados del cuerpo humano",
        autor: "jose Anile",
        año: 2008,
        genero: "Salud",
        disponible: true
    },
    {
        id: 10,
        titulo: "Matar a un ruiseñor",
        autor: "Harper Lee",
        año: 1960,
        genero: "Ficción",
        disponible: true
    }
];

// Array de objetos usuarios
const usuarios = [
    {
        id: 1,
        nombre: "Juan Pérez",
        email: "juan.perez@gmail.com",
        librosPrestados: [1, 4, 9]
    },
    {
        id: 2,
        nombre: "María López",
        email: "maria.lopez@hotmail.com",
        librosPrestados: [2, 7]
    },
    {
        id: 3,
        nombre: "Carlos Martínez",
        email: "carlos.martinez@yahoo.com",
        librosPrestados: [3, 6]
    },
    {
        id: 4,
        nombre: "Ana García",
        email: "ana.garcia@outlook.com",
        librosPrestados: [5, 8]
    },
    {
        id: 5,
        nombre: "Luis Rodríguez",
        email: "luis.rodriguez@icloud.com",
        librosPrestados: [10]
    }
];

// Ejemplo de acceso a los datos
console.log("Libros disponibles:");
libros.filter(libro => libro.disponible).forEach(libro => {
    console.log(`${libro.titulo} de ${libro.autor}`);
});

console.log("\nUsuarios y sus libros prestados:");
usuarios.forEach(usuario => {
    const librosPrestados = usuario.librosPrestados.map(id => {
        return libros.find(libro => libro.id === id).titulo;
    });
    console.log(`${usuario.nombre} - Libros prestados: ${librosPrestados.join(', ')}`);
});

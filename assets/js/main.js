// 1. Implementar ES6 para toda la estructura del código.

// 2. Función asíncrona para obtener los datos de la URL. Enlace: https://jsonplaceholder.typicode.com/photos
const getDatos = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";

  // 3. Bloque de Try / Catch, y método fetch con await para recibir el valor directamente de la promesa.
  try {
    const response = await fetch(url);
    const data = await response.json();

    // 4. Iterar arreglos (por ejemplo: forEach) para mostrar los primeros 20 títulos de los datos recibidos.
    data.forEach((elemento) => {
      if (elemento.id <= 20) {
        console.log(elemento.title);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

// 5. Función que retorne una promesa después de tres(3) segundos utilizando
//    setTimeout. El mensaje a retornar debe ser un string que indique: “Información Enviada”.
const mensaje = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Información Enviada.");
    }, 3000);
  });
};

// 6. Función asíncrona que reciba el mensaje de la promesa creada en el paso 5, de forma directa con await, para ser mostrado en la
//    consola del navegador, agregando el llamado a las dos funciones principales.
const albumes = async () => {
  await getDatos();
  let resp = await mensaje();
  console.log(resp);
};

albumes();
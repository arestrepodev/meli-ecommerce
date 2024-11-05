# Mercado Libre Arnold Frontend Challenge

Este proyecto es una prueba técnica que implementa una versión simplificada de la búsqueda de productos de Mercado Libre, utilizando Next.js 15 con App Router para el frontend y Express para el servidor API.

<img width="1512" alt="image" src="https://github.com/user-attachments/assets/b0bffa2d-ccbd-4cb8-8555-cd77fdc79304">


## 🛠 Tecnologías Utilizadas

- Next.js 15
- React
- Express
- Jest & React Testing Library
- TypeScript
- Node.js
- CSS Modules

## 🚀 Instalación y Ejecución

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd <nombre-del-proyecto>
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**

Necesitarás ejecutar tanto el servidor como el cliente:

Terminal 1 (Cliente):
```bash
npm run dev
```

Terminal 2 (Servidor API):
```bash
npm run server
```

## 📜 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo de Next.js
- `npm run build`: Construye la aplicación para producción
- `npm run start`: Inicia el servidor de producción
- `npm run lint`: Ejecuta el linter
- `npm run server`: Inicia el servidor API con nodemon
- `npm test`: Ejecuta los tests
- `npm run test:watch`: Ejecuta los tests en modo watch

## 🤔 Decisiones Técnicas

1. **Estados del Cliente**
   - Se implementaron estados para mejorar la experiencia de usuario:
     - Loading: Durante la carga de datos
     - Error: Para manejo de errores
     - Empty: Cuando no hay productos

2. **Modificación de la API**
   - Se agregó un campo de descripción por defecto en el servidor Express ya que la API original no lo proporciona.
   - Esto permite mantener una consistencia en la visualización de los productos.

3. **Testing**
   Se implementaron tests para componentes críticos:
   - Hook de fetching de items
   - Componente de búsqueda
   - Página de detalle de producto
   - Página principal

4. **Estilos**
   - Se optó por CSS Modules en lugar de SASS por agilidad en el desarrollo
   - Se tiene experiencia con SASS pero se priorizó la rapidez de implementación

5. **Author Signature**
   - Se implementó la firma del autor en el manejo de datos entre la API y el frontend según lo requerido
   - Se agregó nombre y apellido en el campo author en las respuestas JSON

## 💡 Mejoras Pendientes (Enhancements)

1. **Categorías**
   - Implementación del filtrado por categorías
   - Mejora del breadcrumb basado en la categoría con más resultados
   - No se implementó por restricciones de tiempo pero está contemplado en la arquitectura

2. **Imágenes**
   - Se utilizaron las imágenes de 90x90 proporcionadas por la API
   - Como mejora se podría implementar la búsqueda de imágenes en tamaños más apropiados

## 🗂 Estructura del Proyecto

```
/
├── components/       # Componentes React reutilizables
├── app/              # Páginas de Next.js
├── server/           # Servidor Express
├── models/           # TypeScript Models
├── public/           # Archivos estáticos
├── styles/           # CSS Modules y estilos globales
├── __tests__/        # Tests            
├── utils             # Funciones utilitarios
└── hooks/            # Custom hooks
```

## 🧪 Testing

El proyecto incluye tests unitarios y de integración para los componentes principales. Para ejecutar los tests:

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm run test:watch
```

## 🔍 Funcionalidades Principales

- Búsqueda de productos
- Visualización de resultados
- Detalle de producto
- Manejo de estados de carga y error
- API servidor para gestión de datos
- Firma de autor en respuestas JSON

## 📝 Notas Adicionales

- El proyecto sigue las mejores prácticas de Next.js y React
- Se implementó TypeScript para mayor seguridad de tipos
- Se utilizó un enfoque modular para facilitar el mantenimiento
- Los tests cubren los componentes críticos de la aplicación
- El breadcrumb queda pendiente como mejora

> [!IMPORTANT]
> 📱 Redes Sociales

- [LinkedIn](https://www.linkedin.com/in/arestrepodev/)
- [GitHub](https://github.com/arestrepodev)
- [Portfolio](https://arnoldrestrepo.dev)

# Nusavia

Aplicación web creada con Angular 20.

## Desarrollo local

Instala las dependencias y arranca el servidor de desarrollo:

```bash
npm ci
npm start
```

Abre `http://localhost:4200/`. La aplicación se recarga al guardar cambios.

## Compilación y pruebas

```bash
npm run build
npm test
```

## Publicación en GitHub Pages

El workflow en `.github/workflows/deploy-pages.yml` compila y publica la aplicación
automáticamente cuando se suben cambios a `master` o `main`. La URL del sitio es:

https://glaydyesther.github.io/nusavia/

Para habilitar la primera publicación:

1. En GitHub, abre **Settings → Pages** del repositorio.
2. En **Build and deployment**, selecciona **GitHub Actions** como fuente.
3. Sube la rama `master` o `main`; espera a que termine el workflow **Deploy to GitHub Pages**
   en la pestaña **Actions**.
4. Consulta la URL publicada en **Settings → Pages** o en el resumen del workflow.

Después, para actualizar el sitio, guarda tus cambios, haz commit y súbelos a esa rama:

```bash
git add .
git commit -m "Describe tus cambios"
git push
```

El repositorio puede permanecer privado, pero el sitio de Pages es público. GitHub Pages
con repositorios privados requiere un plan de GitHub que admita Pages para repos privados.
No publiques datos personales, información médica real ni credenciales en esta aplicación.

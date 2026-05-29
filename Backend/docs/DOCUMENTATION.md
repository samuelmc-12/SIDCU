# Documentación del Proyecto Integrador

Este proyecto es una aplicación de consola en Java que utiliza **JPA (Jakarta Persistence API)** con **Hibernate** para gestionar la persistencia de datos en una base de datos PostgreSQL. Utiliza el patrón de diseño **Repository** para abstraer la lógica de acceso a datos.

## Estructura del Proyecto

1.  **Entidades (`com.example`)**: Clases POJO anotadas con `@Entity` que representan las tablas en la base de datos (Ej: `Product`, `Client`, `Employee`).
2.  **Repositorios (`com.example.repository`)**:
    *   `Repository`: Interfaz genérica con métodos CRUD.
    *   `GenericRepositoryImpl`: Implementación base que maneja transacciones y operaciones comunes.
    *   Repositores específicos (`ProductRepository`, etc.): Extienden la base para cada entidad.
3.  **Utilidades (`com.example.util`)**: `JpaUtil` gestiona el `EntityManagerFactory` y provee el `EntityManager`.
4.  **Configuración (`META-INF/persistence.xml`)**: Define la unidad de persistencia, los parámetros de conexión y registra las entidades.
5.  **Main (`com.example.Main`)**: Punto de entrada con el menú interactivo.

## Guía Paso a Paso: Cómo extender el Proyecto

Esta sección está diseñada para que estudiantes nuevos puedan adaptar este sistema a cualquier modelo de datos. Sigue estos pasos para añadir una nueva entidad (por ejemplo, `Supplier` o Proveedor).

### Paso 1: Crear el Modelo (La Entidad)
La entidad es una representación de la tabla en tu base de datos.
1. Crea un nuevo archivo en el paquete principal (ej: `Supplier.java`).
2. Usa la anotación `@Entity` para decirle a JPA que esta clase es una tabla.
3. **Regla de Oro**: Toda entidad **DEBE** tener un constructor vacío.

```java
@Entity
@Table(name = "suppliers") // Nombre de la tabla en la DB
public class Supplier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String companyName;
    private String contactEmail;

    // Constructor vacío (OBLIGATORIO para Hibernate)
    public Supplier() {}

    // Constructor con parámetros (Opcional, para tu comodidad)
    public Supplier(String companyName, String contactEmail) {
        this.companyName = companyName;
        this.contactEmail = contactEmail;
    }

    // No olvides los Getters, Setters y el método toString()
}
```

### Paso 2: Crear el Repositorio (Acceso a Datos)
El repositorio es el que se encarga de "hablar" con la base de datos. Gracias al patrón genérico, no tienes que escribir el código de Insertar o Borrar de nuevo.
1. Crea un archivo en `com.example.repository` (ej: `SupplierRepository.java`).
2. Extiende de `GenericRepositoryImpl<Entidad, TipoId>`.

```java
public class SupplierRepository extends GenericRepositoryImpl<Supplier, Long> {
    public SupplierRepository(EntityManager em) {
        super(em, Supplier.class); // Pasamos la clase para que el genérico sepa qué tabla usar
    }
}
```

### Paso 3: Registro en el Sistema
Para que Hibernate sepa que esta nueva clase existe, debes registrarla en `src/main/resources/META-INF/persistence.xml`.

```xml
<class>com.example.Supplier</class>
```

### Paso 4: Implementar en la Interfaz (Main.java)
Para que el usuario pueda usar la nueva entidad, debes conectarla en el menú:

1.  **Declarar**: Añade una variable estática para el repositorio en `Main.java`:
    `private static SupplierRepository supplierRepo;`
2.  **Inicializar**: En el método `main`, después de obtener el `em`:
    `supplierRepo = new SupplierRepository(em);`
3.  **Lógica CRUD**: Crea un método `menuSuppliers()` siguiendo el ejemplo de los existentes (usando `scanner` para pedir datos y llamando a `supplierRepo.save()`, `findAll()`, etc.).
4.  **Actualizar el Switch**: Añade la opción al menú principal para llamar a tu nuevo método.

---

## Consejos para Principiantes

> [!TIP]
> **Error Común: NullPointerException**: Asegúrate de inicializar el repositorio en el `main` antes de usarlo. Si intentas guardar algo y el repositorio es `null`, el programa fallará.

> [!CAUTION]
> **Nombres de Paquetes**: Si mueves las clases a paquetes nuevos (ej: `com.example.model`), recuerda actualizar los `import` en todas las clases y la ruta en el `persistence.xml`.

> [!NOTE]
> **Autogeneración de Tablas**: Gracias a la propiedad `hibernate.hbm2ddl.auto = update`, no necesitas crear las tablas manualmente en PostgreSQL. Hibernate las creará por ti al ejecutar el programa.

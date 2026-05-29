package com.example;

import com.example.repository.*;
import com.example.util.JpaUtil;
import jakarta.persistence.EntityManager;

import java.time.LocalDate;
import java.util.Scanner;

public class Main {
    private static final Scanner scanner = new Scanner(System.in);
    private static EntityManager em;
    private static EstudianteRepository estudianteRepo;
    private static CarreraRepository carreraRepo;
    private static UniversidadRepository universidadRepo;
    private static InteresRepository interesRepo;
    private static InteresUniversidadRepository interesUniRepo;
    private static UniversidadCarreraRepository uniCarreraRepo;

    public static void main(String[] args) {
        em = JpaUtil.getEntityManager();
        estudianteRepo     = new EstudianteRepository(em);
        carreraRepo        = new CarreraRepository(em);
        universidadRepo    = new UniversidadRepository(em);
        interesRepo        = new InteresRepository(em);
        interesUniRepo     = new InteresUniversidadRepository(em);
        uniCarreraRepo     = new UniversidadCarreraRepository(em);

        boolean exit = false;
        while (!exit) {
            System.out.println("\n--- MENÚ PRINCIPAL ---");
            System.out.println("1. Gestionar Estudiantes");
            System.out.println("2. Gestionar Carreras");
            System.out.println("3. Gestionar Universidades");
            System.out.println("4. Gestionar Intereses (Estudiante-Carrera)");
            System.out.println("5. Gestionar Intereses Universidad");
            System.out.println("6. Gestionar Universidad-Carrera");
            System.out.println("0. Salir");
            System.out.print("Seleccione una opción: ");

            int option = scanner.nextInt();
            scanner.nextLine();

            switch (option) {
                case 1 -> menuEstudiantes();
                case 2 -> menuCarreras();
                case 3 -> menuUniversidades();
                case 4 -> menuIntereses();
                case 5 -> menuInteresUniversidad();
                case 6 -> menuUniversidadCarrera();
                case 0 -> exit = true;
                default -> System.out.println("Opción no válida.");
            }
        }

        JpaUtil.close();
        System.out.println("Saliendo...");
    }

    // ─── ESTUDIANTES ───────────────────────────────────────────────────────────

    private static void menuEstudiantes() {
        System.out.println("\n--- GESTIÓN DE ESTUDIANTES ---");
        System.out.println("1. Crear");
        System.out.println("2. Listar");
        System.out.println("3. Actualizar");
        System.out.println("4. Eliminar");
        System.out.print("Opción: ");
        int opt = scanner.nextInt();
        scanner.nextLine();

        switch (opt) {
            case 1 -> {
                System.out.print("Documento: ");
                String doc = scanner.nextLine();
                System.out.print("Nombre: ");
                String nombre = scanner.nextLine();
                System.out.print("Ciudad: ");
                String ciudad = scanner.nextLine();
                estudianteRepo.save(new Estudiante(doc, nombre, ciudad));
                System.out.println("✓ Estudiante guardado.");
            }
            case 2 -> estudianteRepo.findAll()
                    .forEach(e -> System.out.println("  - " + e.getNombre()
                            + " | Doc: " + e.getDocumento()
                            + " | Ciudad: " + e.getCiudad()));
            case 3 -> {
                System.out.print("ID a actualizar: ");
                long id = scanner.nextLong();
                scanner.nextLine();
                estudianteRepo.findById(id).ifPresentOrElse(e -> {
                    System.out.print("Nuevo documento: ");
                    e.setDocumento(scanner.nextLine());
                    System.out.print("Nuevo nombre: ");
                    e.setNombre(scanner.nextLine());
                    System.out.print("Nueva ciudad: ");
                    e.setCiudad(scanner.nextLine());
                    estudianteRepo.update(e);
                    System.out.println("✓ Estudiante actualizado.");
                }, () -> System.out.println("No encontrado."));
            }
            case 4 -> {
                System.out.print("ID a eliminar: ");
                long id = scanner.nextLong();
                estudianteRepo.findById(id).ifPresentOrElse(e -> {
                    estudianteRepo.delete(e);
                    System.out.println("✓ Estudiante eliminado.");
                }, () -> System.out.println("No encontrado."));
            }
        }
    }

    // ─── CARRERAS ──────────────────────────────────────────────────────────────

    private static void menuCarreras() {
        System.out.println("\n--- GESTIÓN DE CARRERAS ---");
        System.out.println("1. Crear");
        System.out.println("2. Listar");
        System.out.println("3. Actualizar");
        System.out.println("4. Eliminar");
        System.out.print("Opción: ");
        int opt = scanner.nextInt();
        scanner.nextLine();

        switch (opt) {
            case 1 -> {
                System.out.print("Nombre: ");
                String nombre = scanner.nextLine();
                System.out.print("Área: ");
                String area = scanner.nextLine();
                carreraRepo.save(new Carrera(nombre, area));
                System.out.println("✓ Carrera guardada.");
            }
            case 2 -> carreraRepo.findAll()
                    .forEach(c -> System.out.println("  ID: " + c.getIdcarrera()
                            + " | " + c.getNombre()
                            + " | Área: " + c.getArea()));
            case 3 -> {
                System.out.print("ID a actualizar: ");
                long id = scanner.nextLong();
                scanner.nextLine();
                carreraRepo.findById(id).ifPresentOrElse(c -> {
                    System.out.print("Nuevo nombre: ");
                    c.setNombre(scanner.nextLine());
                    System.out.print("Nueva área: ");
                    c.setArea(scanner.nextLine());
                    carreraRepo.update(c);
                    System.out.println("✓ Carrera actualizada.");
                }, () -> System.out.println("No encontrada."));
            }
            case 4 -> {
                System.out.print("ID a eliminar: ");
                long id = scanner.nextLong();
                carreraRepo.findById(id).ifPresentOrElse(c -> {
                    carreraRepo.delete(c);
                    System.out.println("✓ Carrera eliminada.");
                }, () -> System.out.println("No encontrada."));
            }
        }
    }

    // ─── UNIVERSIDADES ─────────────────────────────────────────────────────────

    private static void menuUniversidades() {
        System.out.println("\n--- GESTIÓN DE UNIVERSIDADES ---");
        System.out.println("1. Crear");
        System.out.println("2. Listar");
        System.out.println("3. Actualizar");
        System.out.println("4. Eliminar");
        System.out.print("Opción: ");
        int opt = scanner.nextInt();
        scanner.nextLine();

        switch (opt) {
            case 1 -> {
                System.out.print("Nombre: ");
                String nombre = scanner.nextLine();
                System.out.print("Ciudad: ");
                String ciudad = scanner.nextLine();
                universidadRepo.save(new Universidad(nombre, ciudad));
                System.out.println("✓ Universidad guardada.");
            }
            case 2 -> universidadRepo.findAll()
                    .forEach(u -> System.out.println("  ID: " + u.getIduniversidad()
                            + " | " + u.getNombre()
                            + " | Ciudad: " + u.getCiudad()));
            case 3 -> {
                System.out.print("ID a actualizar: ");
                long id = scanner.nextLong();
                scanner.nextLine();
                universidadRepo.findById(id).ifPresentOrElse(u -> {
                    System.out.print("Nuevo nombre: ");
                    u.setNombre(scanner.nextLine());
                    System.out.print("Nueva ciudad: ");
                    u.setCiudad(scanner.nextLine());
                    universidadRepo.update(u);
                    System.out.println("✓ Universidad actualizada.");
                }, () -> System.out.println("No encontrada."));
            }
            case 4 -> {
                System.out.print("ID a eliminar: ");
                long id = scanner.nextLong();
                universidadRepo.findById(id).ifPresentOrElse(u -> {
                    universidadRepo.delete(u);
                    System.out.println("✓ Universidad eliminada.");
                }, () -> System.out.println("No encontrada."));
            }
        }
    }

    // ─── INTERESES (Estudiante-Carrera) ────────────────────────────────────────

    private static void menuIntereses() {
        System.out.println("\n--- GESTIÓN DE INTERESES (Estudiante-Carrera) ---");
        System.out.println("1. Crear");
        System.out.println("2. Listar");
        System.out.print("Opción: ");
        int opt = scanner.nextInt();
        scanner.nextLine();

        switch (opt) {
            case 1 -> {
                System.out.print("ID Estudiante: ");
                Long idEst = scanner.nextLong();
                System.out.print("ID Carrera: ");
                Long idCar = scanner.nextLong();
                scanner.nextLine();
                // Fecha de hoy automáticamente
                interesRepo.save(new Interes(idEst, idCar));
                System.out.println("✓ Interés guardado (fecha: " + LocalDate.now() + ").");
            }
            case 2 -> interesRepo.findAll()
                    .forEach(i -> System.out.println("  Estudiante ID: " + i.getIdestudiante()
                            + " | Carrera ID: " + i.getIdcarrera()
                            + " | Fecha: " + i.getFechaInteres()));
        }
    }

    // ─── INTERESES UNIVERSIDAD ─────────────────────────────────────────────────

    private static void menuInteresUniversidad() {
        System.out.println("\n--- GESTIÓN DE INTERESES UNIVERSIDAD ---");
        System.out.println("1. Crear");
        System.out.println("2. Listar");
        System.out.print("Opción: ");
        int opt = scanner.nextInt();
        scanner.nextLine();

        switch (opt) {
            case 1 -> {
                System.out.print("ID Estudiante: ");
                Long idEst = scanner.nextLong();
                System.out.print("ID Universidad: ");
                Long idUni = scanner.nextLong();
                scanner.nextLine();
                interesUniRepo.save(new InteresUniversidad(idEst, idUni));
                System.out.println("✓ Interés universidad guardado.");
            }
            case 2 -> interesUniRepo.findAll()
                    .forEach(i -> System.out.println("  Estudiante ID: " + i.getIdestudiante()
                            + " | Universidad ID: " + i.getIduniversidad()));
        }
    }

    // ─── UNIVERSIDAD-CARRERA ───────────────────────────────────────────────────

    private static void menuUniversidadCarrera() {
        System.out.println("\n--- GESTIÓN DE UNIVERSIDAD-CARRERA ---");
        System.out.println("1. Crear");
        System.out.println("2. Listar");
        System.out.print("Opción: ");
        int opt = scanner.nextInt();
        scanner.nextLine();

        switch (opt) {
            case 1 -> {
                System.out.print("ID Universidad: ");
                Long idUni = scanner.nextLong();
                System.out.print("ID Carrera: ");
                Long idCar = scanner.nextLong();
                scanner.nextLine();
                uniCarreraRepo.save(new UniversidadCarrera(idUni, idCar));
                System.out.println("✓ Relación Universidad-Carrera guardada.");
            }
            case 2 -> uniCarreraRepo.findAll()
                    .forEach(uc -> System.out.println("  Universidad ID: " + uc.getIduniversidad()
                            + " | Carrera ID: " + uc.getIdcarrera()));
        }
    }
}
package com.example.repository;

import com.example.Estudiante;
import com.example.repository.impl.GenericRepositoryImpl;
import jakarta.persistence.EntityManager;

public class EstudianteRepository extends GenericRepositoryImpl<Estudiante, Long> {
    public EstudianteRepository(EntityManager em) {
        super(em, Estudiante.class);
    }
}

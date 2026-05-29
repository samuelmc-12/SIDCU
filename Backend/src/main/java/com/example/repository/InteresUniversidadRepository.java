package com.example.repository;

import com.example.InteresUniversidad;
import com.example.repository.impl.GenericRepositoryImpl;
import jakarta.persistence.EntityManager;

public class InteresUniversidadRepository extends GenericRepositoryImpl<InteresUniversidad, Long> {
    public InteresUniversidadRepository(EntityManager em) {
        super(em, InteresUniversidad.class);
    }
}

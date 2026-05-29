package com.example.repository;

import com.example.UniversidadCarrera;
import com.example.repository.impl.GenericRepositoryImpl;
import jakarta.persistence.EntityManager;

public class UniversidadCarreraRepository extends GenericRepositoryImpl<UniversidadCarrera, Long> {
    public UniversidadCarreraRepository(EntityManager em) {
        super(em, UniversidadCarrera.class);
    }
}

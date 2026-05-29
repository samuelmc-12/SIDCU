package com.example.repository;

import com.example.Universidad;
import com.example.repository.impl.GenericRepositoryImpl;
import jakarta.persistence.EntityManager;

public class UniversidadRepository extends GenericRepositoryImpl<Universidad, Long> {
    public UniversidadRepository(EntityManager em) {
        super(em, Universidad.class);
    }
}

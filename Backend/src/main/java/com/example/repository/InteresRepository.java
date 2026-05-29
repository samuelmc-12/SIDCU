package com.example.repository;

import com.example.Interes;
import com.example.repository.impl.GenericRepositoryImpl;
import jakarta.persistence.EntityManager;

public class InteresRepository extends GenericRepositoryImpl<Interes, Long> {
    public InteresRepository(EntityManager em) {
        super(em, Interes.class);
    }
}

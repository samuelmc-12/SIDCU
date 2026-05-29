package com.example.repository;

import com.example.Carrera;
import com.example.repository.impl.GenericRepositoryImpl;
import jakarta.persistence.EntityManager;

public class CarreraRepository extends GenericRepositoryImpl<Carrera, Long> {
    public CarreraRepository(EntityManager em) {
        super(em, Carrera.class);
    }
}

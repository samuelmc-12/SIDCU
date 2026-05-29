package com.example.repository.impl;

import jakarta.persistence.EntityManager;

import java.util.List;
import java.util.Optional;

import com.example.repository.Repository;

public class GenericRepositoryImpl<T, ID> implements Repository<T, ID> {
    protected final EntityManager em;
    private final Class<T> entityClass;

    public GenericRepositoryImpl(EntityManager em, Class<T> entityClass) {
        this.em = em;
        this.entityClass = entityClass;
    }

    @Override
    public void save(T entity) {
        executeInTransaction(() -> em.persist(entity));
    }

    @Override
    public Optional<T> findById(ID id) {
        return Optional.ofNullable(em.find(entityClass, id));
    }

    @Override
    public List<T> findAll() {
        return em.createQuery("FROM " + entityClass.getSimpleName(), entityClass).getResultList();
    }

    @Override
    public void delete(T entity) {
        executeInTransaction(() -> em.remove(em.contains(entity) ? entity : em.merge(entity)));
    }

    @Override
    public void update(T entity) {
        executeInTransaction(() -> em.merge(entity));
    }

    // Método utilitario para asegurar que las operaciones se realicen dentro de una
    // transacción
    protected void executeInTransaction(Runnable action) {
        try {
            em.getTransaction().begin();
            action.run();
            em.getTransaction().commit();
        } catch (RuntimeException e) {
            if (em.getTransaction().isActive())
                em.getTransaction().rollback();
            throw e;
        }
    }
}
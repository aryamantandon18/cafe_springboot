package com.tcf.order.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tcf.order.model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
}


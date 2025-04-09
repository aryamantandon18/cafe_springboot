package com.tcf.order.service;

import com.tcf.order.model.Order;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class OrderResponseWithPayment {
    private String message;
    private Order order;
}

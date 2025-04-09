package com.tcf.order.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tcf.order.model.Order;
import com.tcf.order.model.OrderResponse;
import com.tcf.order.service.OrderResponseWithPayment;
import com.tcf.order.service.OrderService;

@CrossOrigin
@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/create")
    public OrderResponseWithPayment createOrder(@RequestBody Order order) {
        return orderService.createOrder(order);
    }
    @GetMapping("/all")
    public List<OrderResponse> getAllOrdersWithProducts() {
        return orderService.getAllOrdersWithProducts();
    }
}

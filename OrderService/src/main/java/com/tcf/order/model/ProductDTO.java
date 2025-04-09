package com.tcf.order.model;

import lombok.Data;

@Data  //Reduces boilerplate code , generates Getters , Setters, toString() method and equals(),hashcode() methods
public class ProductDTO {
    private Long productId;
    private String productName;
    private double price;
    private int quantity;
}
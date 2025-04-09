package com.tcf.order.PaymentDTO;

import lombok.Data;

@Data
public class PaymentRequest {
    private Long orderId;
    private double amount;
    private String paymentMode;
}
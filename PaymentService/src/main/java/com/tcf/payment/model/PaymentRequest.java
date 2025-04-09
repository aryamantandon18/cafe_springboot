package com.tcf.payment.model;



import lombok.Data;

@Data
public class PaymentRequest {
    private Long orderId;
    private double amount;
    private String paymentMode; // e.g., CARD, UPI, NET_BANKING
}

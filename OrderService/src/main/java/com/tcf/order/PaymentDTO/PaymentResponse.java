package com.tcf.order.PaymentDTO;

import lombok.Data;

@Data
public class PaymentResponse {
	private Long orderId;
	private boolean success;
	private String message;
}

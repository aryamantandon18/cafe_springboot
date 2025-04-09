package com.tcf.payment.controller;



import com.tcf.payment.model.PaymentRequest;
import com.tcf.payment.model.PaymentResponse;
import org.springframework.web.bind.annotation.*;

import java.util.Random;

@RestController
@RequestMapping("/pay")
public class PaymentController {

	@GetMapping
    public String processPayment() {
        return "Payment Successful!";
    }
}

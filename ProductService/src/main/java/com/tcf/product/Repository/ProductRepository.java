package com.tcf.product.Repository;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tcf.product.Entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
    
}

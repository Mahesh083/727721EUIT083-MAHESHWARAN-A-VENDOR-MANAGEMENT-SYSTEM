package com.example.demo.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.DeleteExchange;

import com.example.demo.Model.VendorEntity;
import com.example.demo.Service.Services;


@RestController
public class Control {
@Autowired
Services employeeService;
@PostMapping("/post")
public boolean addEmployee(@RequestBody VendorEntity employee)
{
return employeeService.addEmployee(employee);
}
@GetMapping("/get")
public List <VendorEntity> getAllEmployees()
{
return employeeService.getAllEmployees();
}
@GetMapping("/{id}")
public VendorEntity getEmployeeById(@PathVariable int id)
{
return employeeService.getEmployeeById(id);
}
@PostMapping("/{id}/add")
public VendorEntity addToCart(@PathVariable int id) {
    VendorEntity product = employeeService.addtoCart(id);

    return product;


}
@PutMapping("/{id}/put")
public VendorEntity UpdateCart(@PathVariable int id,@RequestBody VendorEntity
		 ven) {

    VendorEntity product = employeeService.Modify(id,ven);

    return product;


}
@DeleteMapping("/delete/{id}")
public String deleteCarts(@PathVariable int id) {
	return employeeService.deleteCart(id);
}

}
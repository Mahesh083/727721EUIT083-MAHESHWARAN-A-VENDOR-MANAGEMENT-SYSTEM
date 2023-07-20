package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.VendorEntity;
import com.example.demo.Repository.Repo;

@Service
public class Services {
@Autowired
Repo employeeRepo;
public boolean addEmployee(VendorEntity employee)
{
return employeeRepo.save(employee)!=null?true:false;
}
public List <VendorEntity> getAllEmployees()
{
return employeeRepo.findAll();
}
public VendorEntity getEmployeeById(int id)
{
return employeeRepo.findById(id).get();
}
public VendorEntity addtoCart (int Id) {
    VendorEntity product = employeeRepo.findById(Id).orElse(null);
    
    if (product != null) {
    }

    return product;

}
public VendorEntity Modify(int id,VendorEntity ven)
{
return employeeRepo.saveAndFlush(ven);
}
public String deleteCart(int id) {
	employeeRepo.deleteById(id);
	return "Delete the item "+id;
}
}

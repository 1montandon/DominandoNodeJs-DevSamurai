let customers = [
    { id: 1, name: "Dev Samurai", site: "http://devsamurai.com" },
    { id: 2, name: "Google", site: "http://google.com" },
    { id: 3, name: "Facebook", site: "http://facebook.com" },
];
class CustomersCrontollers{

    index(req, res){
        return res.json(customers)
    }

    show(req, res){
        const id = parseInt(req.params.id);
        const customer = customers.find(item => item.id === id);
        const status = customer ? 200 : 404;
    
        console.log("GET :: /customers/:id ", JSON.stringify(customer));
    
        return res.status(status).json(customer);
    }

    create(req, res){
        const { name , site } = req.body;
        const nextId = customers[customers.length - 1].id + 1;
    
        const newCustomer = { id: nextId, name, site};
        customers.push(newCustomer);
        const status = newCustomer ? 201 : 400;
    
        return res.status(status).json(newCustomer);
    }

    update(req, res){
        const id = parseInt(req.params.id);
        const { name, site } = req.body;
    
        const index = customers.findIndex(item => item.id === id)
        const status = index >= 0 ? 200 : 404;
    
        if (index >= 0){
            customers[index] = { id, name, site };
        }
    
        return res.status(status).json(customers[index])
    }

    destroy(req, res){
        const id = parseInt(req.params.id);
        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;
    
        if (index >= 0){
            customers.splice(index, 1);
        }
    
        return res.status(status).json(customers);
    }
}

export default new CustomersCrontollers
const getData = async () => {
    try {
        const res = await fetch("http://localhost:3000/AllProducts");
        // console.log(res);

        if (!(res.ok)) {
            throw new Error(`Response status: ${res.status}`);
        }
        let data = await res.json();

       return data;
       
    } catch (error) {
        console.error(error.message)
        
    }

}

export default getData;


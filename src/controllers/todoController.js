exports.get = (req,res) => {
    const id = req.params.id
    console.log("GET");
    res.send(`Ok Get id=${id}`);
}

exports.getAll = (req,res) => {
    console.log("GET All");
    res.send("OK Get All");
}

exports.add = (req,res) => {
    console.log("ADD");
    res.send("OK Add");
}

exports.update = (req,res) => {
    console.log("UPDATE");
    res.send("OK Update");
}

exports.delete = (req,res) => {
    console.log("Delete");
    res.send("OK Delete");
}
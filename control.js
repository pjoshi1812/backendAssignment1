let tasks = [];
let id = 1;

exports.create=async (req, res) => {
    const {title,desc}  =req.body

    const newTask = {
        id: id++,
        title,
        desc,
    };
    tasks.push(newTask);
    res.status(201).send({ message: "Data saved in array tasks",newTask });
}

exports.findAll=async (req,res)=>{
    res.status(200).json(tasks)
}

exports.update=async (req,res)=>{
    const id = req.params.id;
    const idInt = parseInt(id);
    const {title,desc} = req.body
    const taskIndex = tasks.findIndex(task => task.id === idInt);

    tasks[taskIndex] = {
        id:idInt,
        title,
        desc
    };
    res.status(200).send({ message: "Task data updated",task:tasks[taskIndex]})
}

exports.delete=async(req,res)=>{
    const id = req.params.id;
    const idInt = parseInt(id);
    const taskIndex = tasks.findIndex(task => task.id === idInt);
    tasks.splice(taskIndex,1)
    res.status(200).send({message:"task delete!",task:tasks})
}
exports.findOne=async(req,res)=>{
    const id = req.params.id;
    const idInt = parseInt(id);
    const taskIndex = tasks.findIndex(task => task.id === idInt);
    res.status(200).send({message:"Task Data",task:tasks[taskIndex]})
}
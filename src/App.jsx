import { Button, Container, Flex, Input, Spacer, Item } from "./styles";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);

  const addTask = () => {
    if (!task) {
      if (!task) return toast("Insira uma nova tarefa");
    }

    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    };

    setListTask([...listTask, newTask]);
    setTask("");
  };

  const removeTask = (id) => {
    const newList = listTask.filter((task) => task.id !== id);
    setListTask(newList);
  };

  const toggleChecked = (id, checked) => {
    const index = listTask.findIndex((task) => task.id === id);
    const newList = listTask;
    newList[index].checked = !checked;
    setListTask([...newList]);
  };

  return (
    <Container>
      <h1 className="title">TODO LIST</h1>
      <Spacer />

      <Flex direction="row">
        <Input
          value={task}
          placeholder="Digite sua tarefa"
          onChange={(e) => setTask(e.target.value)}
        />
        <div>
          <Button onClick={addTask}>Adicionar Tarefa</Button>
          <ToastContainer />
        </div>
      </Flex>
      <Spacer margin="16px" />
      <ul>
        {listTask.map((task) => (
          <>
            <Item checked={task.checked} key={task.id}>
              <p>{task.task}</p>
              <Flex direction="row">
                <button onClick={() => toggleChecked(task.id, task.checked)}>
                  <i class="bx bxs-check-circle "></i>
                </button>
                <button onClick={() => removeTask(task.id)}>
                  <i class="bx bxs-trash-alt "></i>
                </button>
              </Flex>
            </Item>
            <Spacer margin="12px" />
          </>
        ))}
      </ul>
    </Container>
  );
}

export default App;

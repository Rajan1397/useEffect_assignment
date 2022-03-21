import React from "react";

const Todo = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const [todos, setTodods] = React.useState([]);

  React.useEffect(() => {
    getTodos(); // invoke this functon only for first time of mounting
  }, [page]);

  const getTodos = () => {
    setIsLoading(true);

    fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
      .then((res) => res.json())
      .then((res) => setTodods(res))
      .catch((err) => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  const handleAdd = () => {
    console.log(inputValue);
    const payload = {
      title: inputValue,
      status: false,
    };
    setIsLoading(true);
    const payloadjson = JSON.stringify(payload);

    fetch(`http://localhost:3001/todos`, {
      method: "POST",
      body: payloadjson,
      headers: {
        "content-type": "application/json",
      },
    })
      .then(() => {
        getTodos();
      })
      .catch((err) => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Add Todos"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleAdd}>ADD</button>

      {todos.map((item) => {
        return <div>{item.title}</div>;
      })}
      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export { Todo };

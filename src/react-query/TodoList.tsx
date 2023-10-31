import useTodos from './hooks/useTodos';

  /*
    Now this components focus only on markup, it does not know how the data should be fecthed.
    So it only haave 1 responsibility

    */

const TodoList = () => {
    const { data: todos, error, isLoading } = useTodos()

    if(isLoading) return <p>Loading...</p>


  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

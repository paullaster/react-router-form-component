import { Form, useLoaderData } from "react-router-dom";

export const action = () => {
  const message = "This is a pure blis";
  return { message };
};

const App = () => {
  const message = useLoaderData()
  return (
    <>
      <Form method="POST">
        <input type="text" name="title" placeholder="Mugging" />
        <input
          type="text"
          name="description"
          placeholder="This is the act of ..."
        />
        <button type="submit">create</button>
      </Form>
      <div>
        <span>{message}</span>
      </div>
    </>
  );
};

export default App;

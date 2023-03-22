import './App.css';

function AppJSX() {
  const name = 'world';
  const list = ['a', 'b', 'c'];
  return (
    <>
      <h1 className="orange">{`Hello ${name}`}</h1>
      <h2>Hello</h2>
      <p>{name}</p>
      <ul>
        {list.map(item => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: '200px', height: '200px' }}
        src="https://images.unsplash.com/photo-1676799910702-5b40ee8ac092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80"
        alt="failed"
      />
    </>
  );
}

export default AppJSX;

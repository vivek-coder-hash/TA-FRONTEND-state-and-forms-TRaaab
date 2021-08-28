function App() {
  return (
    <div className="container">
      <h1>My List</h1>
      <input
        type="text"
        className="input width-100 form-control"
        placeholder="Add AnyThing In List"
      />
      <ul className="root">
        <ul>
          <li class="flex justify-between align-center">
            <p>text</p>
            <button>To watch</button>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default App;

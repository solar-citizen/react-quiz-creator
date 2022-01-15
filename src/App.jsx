import Layout from './hoc/Layout/Layout';

const App = () => {
  return (
    <Layout>
      <div style={{ width: 400, border: '1px solid black' }}>
        <h1>Hello There</h1>
        <h2>General Kenobi</h2>
      </div>
    </Layout>
  );
};

export default App;

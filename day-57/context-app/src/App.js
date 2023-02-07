import './App.css';
import Heading from './components/heading';
import Layout from './components/layout';
import Section from './components/sectio';
import Sectio from './components/sectio';
import { UserProvider } from './contexts/userContext';

function App() {
  // const userName = "Khangaikhuu"
  return (
    <div className="App">
      <h1>Day 57 React - Context</h1>
      {/* <UserProvider>
        <Layout />
      </UserProvider> */}
      <Section level={1}>
        <Heading level={1}>Title</Heading>
        <Section level={2}>
          <Heading level={2}>Heading</Heading>
          <Heading level={2}>Heading</Heading>
          <Heading level={2}>Heading</Heading>
          <Section level={3}>
            <Heading level={3}>Sub-heading</Heading>
            <Heading level={3}>Sub-heading</Heading>
            <Heading level={3}>Sub-heading</Heading>
            <Section level={4}>
              <Heading level={4}>Sub-sub-heading</Heading>
              <Heading level={4}>Sub-sub-heading</Heading>
              <Heading level={4}>Sub-sub-heading</Heading>
              <Section level={5}>
                <Heading level={5}>Supar-duper-heading</Heading>
                <Heading level={5}>Supar-duper-heading</Heading>
                <Heading level={5}>Supar-duper-heading</Heading>
                <Section level={6}>
                  <Heading level={6}>Real-supaaaar-saiyan-heading</Heading>
                  <Heading level={6}>Real-supaaaar-saiyan-heading</Heading>
                  <Heading level={6}>Real-supaaaar-saiyan-heading</Heading>
                </Section>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
}

export default App;

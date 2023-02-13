
import './App.css';
import Body from './components/body';
import ChangeTheme from './components/changeTheme';
import Footer from './components/footer';
import Header from './components/Header';

import TimersDashboard from "./components/TimersDashboard";
import { TimerContextProvider } from './context/TimerContext';

export default function App() {
  return (
    <div>
      <h1>Custom HOOK </h1>

      {/* <TimerContextProvider>
        <TimersDashboard />
      </TimerContextProvider> */}
      <ChangeTheme />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

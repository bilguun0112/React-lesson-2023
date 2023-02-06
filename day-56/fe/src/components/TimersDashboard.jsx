import { useEffect, useState } from "react";
import { newTimer } from "../components/Helpers";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";
import axios from 'axios'

export default function TimersDashboard() {
  const [timers, setTimers] = useState({ timers: [] });

  const URL = 'http://localhost:8080/timers'

  async function fetchTimersData() {
    const FETCHED_DATA = await fetch(URL)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setTimers({ timers: FETCHED_JSON.data })
  }
  useEffect(() => {
    fetchTimersData();

  }, [])
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // useEffect(() => {
  //   setInterval(() => setTimers({ timers: projects }), 1000);
  // }, []);

  function handleCreateFormSubmit(timer) {
    createTimer(timer);
  }

  async function handleEditFormSubmit(attrs) {
    updateTimer(attrs);
    console.log('attras', attrs);
    const FETCHED_DATA = await axios({
      url: URL, method: 'PUT',
      data: attrs
    })
    console.log(FETCHED_DATA.data.data);


  }

  async function createTimer(timer) {
    const t = newTimer(timer);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...t, elapsed: getRandomInt(1273998, 1973998) })
    }
    const FETCHED_DATA = await fetch(URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json()
    console.log('m fetch', FETCHED_JSON);
    setTimers({ timers: FETCHED_JSON.data })
  }

  function handleTrashClick(timerId) {
    deleteTimer(timerId);
  }

  function handleStartClick(timerId) {
    startTimer(timerId);
  }

  function handleStopClick(timerId) {
    stopTimer(timerId);
  }
  function startTimer(timerId) {
    const now = Date.now();
    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          console.log(timer);
          timer.runningSince = now;
          return timer;
        } else {
          return timer;
        }
      }),
    });
  }

  function stopTimer(timerId) {
    const now = Date.now();

    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          timer.elapsed = timer.elapsed + lastElapsed;
          timer.runningSince = null;
        }
        return timer;
      }),
    });
  }

  function updateTimer(attrs) {
    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === attrs.id) {
          timer.title = attrs.title;
          timer.project = attrs.project;
        }
        return timer;
      }),
    });
  }

  async function deleteTimer(timerId) {
    // setTimers({
    //   timers: timers.timers.filter((t) => t.id !== timerId),
    // });
    const delFil = {
      id: timerId
    }
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(delFil)
    }

    const FETCHED_DATA = await fetch(URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setTimers({ timers: FETCHED_JSON.data })
  }




  return (
    <div>
      <h1>Timers</h1>
      {timers.timers && (
        <div>
          <EditableTimerList
            timers={timers.timers}
            onFormSubmit={handleEditFormSubmit}
            onTrashClick={handleTrashClick}
            onStartClick={handleStartClick}
            onStopClick={handleStopClick}
          />
          <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
        </div>
      )}
    </div>
  );
}

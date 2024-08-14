import { useState } from "react";
import ReminderList from "./components/ReminderList";
import Reminder from "./types/Reminder";

const App = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [isLoading, setLoading] = useState(true);
  return (
    <main>
      <h1>Reminder App With Typescript</h1>
      <br />
      <ReminderList items={reminders} />
    </main>
  );
};
export default App;

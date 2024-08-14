import { useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import Reminder from "./types/Reminder";
import reminderService from "./services/reminders";

const App = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  // const [isLoading, setLoading] = useState(true);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  useEffect(() => {
    loadReminders();
  }, []);
  return (
    <main>
      <h1>Reminder App With Typescript</h1>
      <br />
      <ReminderList items={reminders} />
    </main>
  );
};
export default App;

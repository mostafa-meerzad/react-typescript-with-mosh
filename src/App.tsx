import { useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import Reminder from "./types/Reminder";
import reminderService from "./services/reminders";
import NewReminder from "./components/NewReminder";

const App = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  // const [isLoading, setLoading] = useState(true);

  const removeReminder = (id: number) => {
    // console.log(id)
    setReminders(reminders.filter((item) => item.id !== id));
  };

  const addReminder = async (title: string) => {
    // console.log(title)
    const newReminder = await reminderService.AddReminder(title);
    setReminders([newReminder, ...reminders]);
  };

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
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </main>
  );
};
export default App;

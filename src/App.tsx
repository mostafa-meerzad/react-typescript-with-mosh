import ReminderList from "./components/ReminderList";
import Reminder from "./types/Reminder";


const reminders: Reminder[] = [
  {id:1, title:"learn MySQL"},
  {id:1, title:"learn Git"},
  {id:1, title:"learn Python"},
  {id:1, title:"learn Javascript"},
]
const App = () => {


  return (
    <main>
      <h1>Reminder App With Typescript</h1>
      <br />
      <ReminderList items={reminders}/>
    </main>
  );
};
export default App;

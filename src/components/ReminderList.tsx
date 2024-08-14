import Reminder from "../types/Reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

const ReminderList = ({ items, onRemoveReminder }: ReminderListProps) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}
            <br />
            <button onClick={() => onRemoveReminder(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ReminderList;

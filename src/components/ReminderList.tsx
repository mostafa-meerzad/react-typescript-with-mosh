import Reminder from "../types/Reminder";

interface ReminderListProps {
  items: Reminder[];
}

const ReminderList = ({ items }: ReminderListProps) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default ReminderList;

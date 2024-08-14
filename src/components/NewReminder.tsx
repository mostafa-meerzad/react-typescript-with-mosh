import { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}
const NewReminder = ({ onAddReminder }: NewReminderProps): JSX.Element => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    // console.log(title)
    onAddReminder(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title"></label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
      />
      <button type="submit" className="submit">
        Add Reminder
      </button>
    </form>
  );
};
export default NewReminder;

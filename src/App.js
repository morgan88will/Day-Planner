
import './App.css';
import { TaskForm } from './components/TaskForm';
import {TaskList} from './components/TaskList';
import {TaskProvider} from './TaskContext.js'

function App() {
  return (
    <TaskProvider>
      <TaskForm />
      <TaskList />
      </TaskProvider>
  );
}

export default App;

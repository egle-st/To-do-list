import { ToDoList } from '@components/index';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('ToDoList component', () => {
  it('renders to screen successfully', () => {
    render(<ToDoList />);
    const getToDoListComponent = screen.getByTestId('todo-component');
    expect(getToDoListComponent).toBeInTheDocument();
  });
});

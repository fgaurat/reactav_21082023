import type { Meta, StoryObj } from '@storybook/react';
import TodoList from '../components/TodoList';


const meta = {
    title: 'TodosApp/TodoList',
    component: TodoList,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
  } satisfies Meta<typeof TodoList>;

  export default meta;
  type Story = StoryObj<typeof meta>;
  

  export const Example01: Story = {
    args: {
        todos:[
            {
                "userId": 1,
                "id": 13,
                "title": "et doloremque nulla",
                "completed": false
              },
              {
                "userId": 1,
                "id": 14,
                "title": "repellendus sunt dolores architecto voluptatum",
                "completed": true
              },
              {
                "userId": 1,
                "id": 15,
                "title": "ab voluptatum amet voluptas",
                "completed": true
              },            
        ],
        doDelete:()=>{}
    }
  };
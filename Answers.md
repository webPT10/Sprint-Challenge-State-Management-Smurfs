1. What problem does the context API help solve?

    > Context API solves the problem/issues surrounding prop drilling. Allows one to pass props from Parent to specific Child component via Provider.Context, Child uses Consumer.Context.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    >Actions: tells the reducer HOW to update the State Tree
    >Reducer: Only place in Redux stat can be updated
    >Store: is the Single source of truth because everything comes from the store, i.e. all information is stored here.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    >Application state is data held in the Application
    >Component state is data held in the Component

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    >Assists with async functionss such as API calls. Action is dispatched to middleware.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    >Not informed enough to make a fully informed decision. What is your favorite?

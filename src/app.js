import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// addExpense -> water bill
store.dispatch(addExpense({ description: 'Water Bill', amount: 4500}));
// addExpense -> gas bill
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000}));
// addExpense -> rent bill
store.dispatch(addExpense({ description: 'Rent Bill', amount: 109500}));
// // setTextFilter -> 'bill'
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

// getVisibleExpenses -> print

    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);


// console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter /> 
    </Provider>
);

ReactDOM.render(jsx, document.getElementById(`app`));

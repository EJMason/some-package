import test from 'ava'
import { addThree, addTwo, addFiveToAnyNumber } from './sample'

test('Add two numbers sums two numbers', (t) => {
    t.is(addTwo(1, 2), 3)
})

test('Add three numbers sums 3 numbers', (t) => {
    t.is(addThree(1, 2, 3), 6)
})
test('Add 5 to anything', (t) => {
    t.is(addFiveToAnyNumber(5), 10)
})

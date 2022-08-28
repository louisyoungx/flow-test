export enum Operator {
    Addition = '+',
    Subtraction = '-',
    Multiplication = '*',
    Division = '/',
    Equal = '===',
    Unequal = '!==',
    Greater = '>',
    Less = '<',
    Greater_equal = '>=',
    Less_equal = '<=',
}

export type OperatorType =
    | Operator.Addition
    | Operator.Subtraction
    | Operator.Multiplication
    | Operator.Division
    | Operator.Equal
    | Operator.Unequal
    | Operator.Greater
    | Operator.Less
    | Operator.Greater_equal
    | Operator.Less_equal

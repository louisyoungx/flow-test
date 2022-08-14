export enum Operator {
    Addition = '+',
    Subtraction = '-',
    Mutiplication = '*',
    Divison = '/',
    Equal = '===',
    Inequal = '!==',
    Greater = '>',
    Less = '<',
    Greater_equal = '>=',
    Less_equal = '<=',
}

export type OperatorType =
    | Operator.Addition
    | Operator.Subtraction
    | Operator.Mutiplication
    | Operator.Divison
    | Operator.Equal
    | Operator.Inequal
    | Operator.Greater
    | Operator.Less
    | Operator.Greater_equal
    | Operator.Less_equal

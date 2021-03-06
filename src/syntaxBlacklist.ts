const syntaxBlacklist: { [nodeName: string]: number } = {
  // List of all node types taken from
  // https://github.com/acornjs/acorn/blob/master/acorn-walk/src/index.js

  // Chapter 1
  Program: 1,
  BlockStatement: 1,
  ExpressionStatement: 1,
  IfStatement: 1,
  ReturnStatement: 1,
  FunctionDeclaration: 1,
  VariableDeclaration: 1,
  VariableDeclarator: 1,
  ArrowFunctionExpression: 1,
  UnaryExpression: 1,
  BinaryExpression: 1,
  LogicalExpression: 1,
  ConditionalExpression: 1,
  CallExpression: 1,
  Identifier: 1,
  Literal: 1,

  // Chapter 2 (no new syntax)

  // Chapter 3
  BreakStatement: 3,
  ContinueStatement: 3,
  WhileStatement: 3,
  ForStatement: 3,
  MemberPattern: 3,
  ArrayExpression: 3,
  AssignmentExpression: 3,
  MemberExpression: 3,
  Property: 3,

  // Disabled (aka chapter 100)
  ObjectExpression: 100,
  NewExpression: 100,

  // Disallowed forever
  UpdateExpression: Infinity,
  Statement: Infinity,
  EmptyStatement: Infinity,
  ParenthesizedExpression: Infinity,
  LabeledStatement: Infinity,
  WithStatement: Infinity,
  SwitchStatement: Infinity,
  SwitchCase: Infinity,
  YieldExpression: Infinity,
  AwaitExpression: Infinity,
  ThrowStatement: Infinity,
  SpreadElement: Infinity,
  TryStatement: Infinity,
  CatchClause: Infinity,
  DoWhileStatement: Infinity,
  ForInStatement: Infinity,
  ForOfStatement: Infinity,
  ForInit: Infinity,
  DebuggerStatement: Infinity,
  Function: Infinity,
  Pattern: Infinity,
  VariablePattern: Infinity,
  RestElement: Infinity,
  ArrayPattern: Infinity,
  ObjectPattern: Infinity,
  Expression: Infinity,
  ThisExpression: Infinity,
  Super: Infinity,
  MetaProperty: Infinity,
  FunctionExpression: Infinity,
  SequenceExpression: Infinity,
  TemplateLiteral: Infinity,
  TemplateElement: Infinity,
  AssignmentPattern: Infinity,
  ExportNamedDeclaration: Infinity,
  ExportDefaultDeclaration: Infinity,
  ExportAllDeclaration: Infinity,
  ImportDeclaration: Infinity,
  ImportSpecifier: Infinity,
  ImportDefaultSpecifier: Infinity,
  ImportNamespaceSpecifier: Infinity,
  TaggedTemplateExpression: Infinity,
  ClassDeclaration: Infinity,
  ClassExpression: Infinity,
  Class: Infinity,
  ClassBody: Infinity,
  MethodDefinition: Infinity
}

export default syntaxBlacklist

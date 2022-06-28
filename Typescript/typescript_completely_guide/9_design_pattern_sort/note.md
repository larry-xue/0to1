# overview

## abstract class

- can't be used to create an object directly
- only used as a parent class
- can contain real implementation for some methods
- the implemented methods can refer to other methods that don't actually exist yet(we still have to provide names and types for the un-implemented methods)
- can made child classes promise to implement some other method

## Interfaces vs Abstract Classes

### Interfaces

- Sets up a contract between different classes
- Use when we have very different classes
- Promotes loose coupling

### Inheritance / Abstract Classes

- Sets up a contract between different classes
- Use when we are trying to build up a definition of an object
- Strongly couples classes together

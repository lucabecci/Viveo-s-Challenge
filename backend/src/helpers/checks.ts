class Checks {
  public operationCheck(operation: string, result: number): boolean {
    if (operation == null || result == null) {
      return true;
    }
    return false;
  }
}

export default Checks;
